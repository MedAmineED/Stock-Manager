const db = require("../config/db")

class Product {
    constructor(productName, 
                description, 
                basePricing, 
                dscType, 
                dscPercent, 
                taxClass, 
                VATAmount, 
                category, 
                tag, 
                status)
    {
        this.productName = productName,
        this.description = description,
        this.basePricing = basePricing,
        this.dscType = dscType,
        this.dscPercent = dscPercent,
        this.taxClass =taxClass,
        this.VATAmount=VATAmount,
        this.category = category,
        this.tag = tag,
        this.status = status
    }
    async addNewProduct() {
        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO products (ref, productName, description, basePricing, dscType, dscPercent, taxClass, VATAmount, category, tag, status) 
            VALUES (NULL, '${this.productName}', '${this.description}', ${this.basePricing}, '${this.dscType}', ${this.dscPercent}, '${this.taxClass}', ${this.VATAmount}, '${this.category}', '${this.tag}', '${this.status}')`,            
            {},
            (error, result)=> {
                if(error){
                    reject(error)
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Product