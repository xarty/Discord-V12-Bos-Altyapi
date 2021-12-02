const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetkin Yok Kodu
        if(!message.member.roles.cache.has("rol-id")){
            const arty = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip değilsin.`)
            .setColor('BLACK')
            .setFooter('🎃 arty')
            return message.channel.send(arty)
        }

        // Let Tanımları
        let miktar = args[0]
        
        // Hata Mesajları
        if(miktar > 100){
            const arty = new Discord.MessageEmbed()
            .setDescription(`${message.author} - En Fazla \`100\` Mesaj Silebilirim.`)
            .setColor('BLACK')
            .setFooter('🎃 arty')
            return message.channel.send(arty)
        }
        if(!miktar){
            const arty = new Discord.MessageEmbed()
            .setDescription(`${message.author} - Lütfen Silinecek Mesaj Sayısını Gir.`)
            .setColor('BLACK')
            .setFooter('🎃 arty')
            return message.channel.send(arty)
        }
        if(isNaN(miktar)){
            const arty = new Discord.MessageEmbed()
            .setDescription(`${message.author} - Harf Değil, Sayı Giriceksin.`)
            .setColor('BLACK')
            .setFooter('🎃 arty')
            return message.channel.send(arty)
        }

        // Sil
        if(miktar){
            message.channel.bulkDelete(miktar)
            
            const arty = new Discord.MessageEmbed()
            .setDescription(`${message.author} - Başarıyla ${miktar} Adet Mesaj Sildim.`)
            .setColor('BLACK')
            .setFooter('🎃 arty')
            return message.channel.send(arty).then(cmf => {
                cmf .delete({timeout: 5000})
            })
        }
    }

    exports.config = {
        name: "sil",
        guildOnly: true,
        aliases: ["clear"],
      };
