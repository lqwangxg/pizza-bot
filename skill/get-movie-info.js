'use strict';
const movie_service = require("../service/movie-service");
module.exports = class GetMovieInfo {

    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor() {
        this.required_parameter = {
            movie: {
                message_to_confirm: {
                    type: "text",
                    text: "映画名を教えて下さい。"
                }
            }
        };
    }
    

    // パラメーターが全部揃ったら実行する処理を記述します。
    async finish(bot, event, context){
      const movie = await movie_service.getDetail(context.confirmed.movie.toString());
      const text =`${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`;
      
      let message = {
          type: "text",
          text: text
      };

      context.replyMessage = await bot.reply(message);
    }
    
    async queueMessage(bot, movie){
      bot.queue({
        "type": "sticker",
        "packageId": "11537",
        "stickerId": "52002734"
      });
      bot.queue({
        "type": "image",  
        "originalContentUrl": movie.Poster,
        "previewImageUrl": movie.Poster
      });
      bot.queue({
        "type": "location",
        "title": "MBP　SMARTEC株式会社",
        "address": "〒101‐0052 東京都千代田区神田小川町3－22　第三大丸ビル4階",
        "latitude": 35.6963236,
        "longitude": 139.7623093
      });
      
      bot.queue({
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
            "type": "carousel",
            "columns": [
                {
                    "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": "this is menu",
                    "text": "description",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "http://example.com/page/123"
                    },
                    "actions": [
                        {
                            "type": "postback",
                            "label": "Buy",
                            "data": "action=buy&itemid=111"
                        },
                        {
                            "type": "postback",
                            "label": "Add to cart",
                            "data": "action=add&itemid=111"
                        },
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "http://example.com/page/111"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
                    "imageBackgroundColor": "#000000",
                    "title": "this is menu",
                    "text": "description",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "http://example.com/page/222"
                    },
                    "actions": [
                        {
                            "type": "postback",
                            "label": "Buy",
                            "data": "action=buy&itemid=222"
                        },
                        {
                            "type": "postback",
                            "label": "Add to cart",
                            "data": "action=add&itemid=222"
                        },
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "http://example.com/page/222"
                        }
                    ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
      });
      
    }
};
