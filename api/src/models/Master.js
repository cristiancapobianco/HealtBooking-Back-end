const  {DataTypes}= require("sequelize");

module.exports=(sequelize)=>{

    sequelize.define('Master',{
        id:{
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
         type: DataTypes.STRING,
         validate:{
            isEmail:{
                msg: 'Enter a valid email address',
            },
         },
        },
        rol:{
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue: 'master'
        }
    },
    {
        timestamps: false
    })

}