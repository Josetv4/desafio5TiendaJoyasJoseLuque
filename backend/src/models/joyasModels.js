const { pool } = require("../db.js");
const format = require('pg-format');

const obtenerJoyas = async ({ limits = 3, order_by = "id_ASC", page = 1 }) => {
    
    const offset = (page - 1) * limits;
    const [campo, direccion] = order_by.split("_");
    const consulta = format('SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset);
    const { rows: joyas } = await pool.query(consulta);
    return joyas;
};

const Hateos = (data) => {
    const results = data.map(value => (
        {
            href: `http://localhost:3000/joya/${value.id}`,
            name: value.nombre,
            category: value.categoria,
            metal: value.metal,
            price: value.precio,
            stock: value.stock
        }
    ))

    let count = 0
    results.map(cantidad => count += cantidad.stock)

    const totalJoyas = results.length
    const stockTotal = count
    const formatHateos = {
        totalJoyas,
        stockTotal,
        results
    }
    return formatHateos
}

const obtenerJoya = async id => {
    const consulta = 'SELECT * FROM inventario WHERE id = $1;'
    const value = [id]
    const { rows: joya } = await pool.query(consulta, value)
    return joya
}


const obtenerJoyasPorFiltros = async ({ precio_min, precio_max, categoria, metal }) => {
    let filtros = []
    if (precio_max) filtros.push(`precio <= ${precio_max}`)
    if (precio_min) filtros.push(`precio >= ${precio_min}`)
    if (categoria) filtros.push(`categoria = '${categoria}'`)
    if (metal) filtros.push(`metal = '${metal}'`)
    let consulta = "SELECT * FROM inventario"
    if (filtros.length > 0) {
    filtros = filtros.join(" AND ")
    consulta += ` WHERE ${filtros}`
    }
 
    const { rows: joyas } = await pool.query(consulta)
    return joyas
    }

module.exports = { obtenerJoyas, Hateos, obtenerJoya, obtenerJoyasPorFiltros}
