module.exports = (Sequelize, Datatype) => {
    const User = Sequelize.define("User", {
        id_user: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatype.STRING,
            allowNull: false
        },
        user_contactname: {
            type: Datatype.STRING,
            allowNull: true
        },
        email: {
            type: Datatype.STRING,
            allowNull: false
        },
        user_pass: {
            type: Datatype.STRING,
            allowNull: false, // Change to false if 'user_pass' is required
            //defaultValue: 'default_password' // Provide a default value if needed
        },
        user_pass2: {
            type: Datatype.STRING,
            allowNull: true
        },
        user_type: {
            type: Datatype.STRING,
            allowNull: true,
            defaultValue: 'default_password' // Provide a default value if needed
        },
        user_profilename: {
            type: Datatype.STRING,
            allowNull: true,
            defaultValue: 'default_password' // Provide a default value if needed
        },
        user_backuptoken: {
            type: Datatype.STRING,
            allowNull: true
        },
        token_updatedat: {
            type: Datatype.DATE,
            allowNull: true
        },
        user_creation_date: {
            type: Datatype.DATE,
            allowNull: true
        },
        user_lastaccess: {
            type: Datatype.DATE,
            allowNull: true
        },
        user_shorttoken: {
            type: Datatype.STRING,
            allowNull: true
        },
        partner_id: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        user_currency: {
            type: Datatype.STRING,
            allowNull: true
        },
        user_lang: {
            type: Datatype.STRING,
            allowNull: true
        },
        user_photo: {
            type: Datatype.STRING,
            allowNull: true
        },
        user_phonenumber: {
            type: Datatype.STRING,
            allowNull: true
        },
        user_viberid: {
            type: Datatype.STRING,
            allowNull: true
        },
        acces_blog: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        user_config: {
            type: Datatype.TEXT,
            allowNull: true
        },
        user_subscription: {
            type: Datatype.INTEGER,
            allowNull: true
        },
        blog_site: {
            type: Datatype.STRING,
            allowNull: true
        },
        country: {
            type: Datatype.STRING,
            allowNull: true
        },
        pass_updatedAt: {
            type: Datatype.DATE,
            allowNull: true
        },
    }, {
        // Options de modèle
        timestamps: false, // Désactive la création automatique des champs createdAt et updatedAt
        tableName: 'users', // Nom de la table dans la base de données
        //freezeTableName: true, // Assure que le nom de la table ne soit pas modifié
        //underscored: true, // Utilise le style de nommage en snake_case pour les colonnes et les clés étrangères
    });

    User.associate = models => {
        User.hasMany(models.Blog_quotation, {
            foreignKey: 'user_id',
            sourceKey: 'id_user',
            as: 'blogQuotations'
        });
    };

    User.associate = models => {
        User.hasMany(models.Campagns_mailing, {
            foreignKey: 'user_id',
            sourceKey: 'id_user',
            as: 'mailings'
        });
    };


    User.associate = models => {
        User.hasMany(models.Docteur_access, {
          foreignKey: 'docteuraccess_createdby',
          as: 'createdAccess'
        });
      };

      User.associate = models => {
        User.hasMany(models.Push_messages, {
          foreignKey: 'user_id',
          as: 'pushMessages'
        });
      };

      User.associate = models => {
        User.hasMany(models.Push_users, {
          foreignKey: 'user_id',
          as: 'pushUsers'
        });
      };

      User.associate = models => {
        User.hasMany(models.User_history, {
          foreignKey: 'user_id',
          as: 'history'
        });
      };
    
    

    return User;
}
