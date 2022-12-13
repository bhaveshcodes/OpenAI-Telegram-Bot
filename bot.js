const { Telegraf } = require("telegraf");
const request = require("request");
const express = require('express');
const dotenv = require('dotenv').config;

const generateIMG = require('./generateIMG');

const token = "5971390987:AAG-OndGJ2FzpT8KjwfvLxq5goLBkmiCvdQ"

const bot = new Telegraf(token)

bot.command("start", async (ctx) => {
    await ctx.replyWithHTML('Enter Any Text');
})

// bot.command('msg', ctx => {
// bot.on("message", async (ctx) => {


//     ctx.reply('trying').then(({ message_id }) => {
//         console.log(message_id + "emg");
//         let img = loadImg(ctx.update.message.text).then(console.log("this is img"))
// console.log(img +"{{-");
//      ctx.replyWithPhoto({ url: img }).then(ctx.telegram.deleteMessage(ctx.chat.id, message_id))

//     })
//     let chatId = ctx.chat.id;
//     console.log(chatId + "<-----line 22");

//     let messageId = ctx.message.message_id;
    //     console.log(messageId + "<-----line 23");

    //     loadImg(chatId)
    // ctx.telegram.deleteMessage(chatId,messageId)

    // console.log(ctx.chat.id + "30");
    // console.log(ctx.from.message_id + "30");

    // await ctx.reply('Hello there').then(({ message_id }) => {
    //     console.log(message_id + "<---59")

    //     let chatId = ctx.from.id;
    //     console.log(chatId + "<-----line 60");

    //     const text = ctx.update.message.text
    //     console.log(text);
    //   loadImg(text);

    //     //  const img= generateIMG.generateImage(text)

    //     //  console.log("srart").then(ctx.replyWithPhoto({url: img }).then(console.log("here")) )     ;
    //     //  console.log("here 30")
    //     //  await ctx.replyWithHTML(text);





    // })


    //   ctx.telegram.deleteMessage(chatId,message_id);


// })


// async function loadImg(text) {
//     console.log(text + " in func");

//     const img =await generateIMG.generateImage(text)
//     return img
//     console.log(img);

//     await ctx.replyWithHTML(text);
//     await ctx.replyWithPhoto({ url: img })

// }

bot.on("message", async (ctx) => {

    // await ctx.replyWithHTML("Loading...")
    // await ctx.replyWithHTML("Loading....").then(async({ message_id  }) => {

    await ctx.reply("⏳").then(async({ message_id  }) => {
        
        console.log(ctx.message.message_id + " 30"),
        console.log(message_id + " 33"),
        console.log(ctx.chat.id + " 30")

       


        
        
        
        const text = ctx.update.message.text
        const img=await generateIMG.generateImage(text)
        console.log(img);
        await ctx.replyWithPhoto({url: img })
        await ctx.telegram.deleteMessage(ctx.chat.id,message_id);
        await ctx.replyWithHTML(text)

    })
// ctx.telegram.deleteMessage(ctx.chat.id,ctx.message.message_id);





//     ctx.reply('🤣').then(({ message_id  }) => {
//          console.log(message_id +"emg");
//       })
//     console.log(ctx.from.id  + "<-----smile");
//     var chat__ID=ctx.from.id;
//     console.log(ctx.message.message_id + "<-----smile MID");
//     var msg__ID=ctx.from.id;
//     ctx.reply('Hello there').then(({ message_id  }) => {
//         var message_iid=message_id;
//         console.log(message_id +"<- 19");
//         // console.log(chatId+"<- 20"); //undefined
//       })
//     let chatId=ctx.from.id;
//     let messageId=ctx.message.message_id;
//     console.log(chatId  + "<-----line 20");
//     console.log( messageId + "<-----line 21");

//   const text = ctx.update.message.text

 

//  const img=await generateIMG.generateImage(text)
//  console.log(img);

//  await ctx.replyWithHTML(text);
// await ctx.replyWithPhoto({url: img })
// ctx.telegram.deleteMessage(chatId,messageId);
// console.log("deleted id M"+messageId+"cI "+chatId);
// console.log( "STARTS line 24"+ctx.from.id + " ENDS line 24");
// await ctx.replyWithHTML(img)
// await ctx.replyWithHTML(text)
// ctx.bot.deleteMessage (message_id = must_delete.message_id,
//     chat_id = update.message.chat_id)
//  console.log( "STARTS line 27"+ctx.from.id + " ENDS line 27");


// console.log(text);
})



bot.launch().then(() => {
    console.log("Bot Started...");
})