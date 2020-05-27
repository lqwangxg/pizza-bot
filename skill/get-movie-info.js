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
      let movie = await movie_service.getDetail(context.confirmed.movie.toString());
      let message = {
          type: "text",
          text: `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`
      };

      await bot.reply(message);
    }
};
