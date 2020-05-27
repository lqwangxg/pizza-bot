'use strict';

module.exports = class DutyInfo {

    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor() {
        this.required_parameter = {
            username: {
                message_to_confirm: {
                    type: "text",
                    text: "名前を教えて下さい。"
                }
            },
            date: {
              message_to_confirm: {
                  type: "text",
                  text: "出勤日を教えて下さい。"
              }
            },
            fromTime: {
              message_to_confirm: {
                  type: "text",
                  text: "開始時間を教えて下さい。"
              }
            },
            toTime: {
              message_to_confirm: {
                  type: "text",
                  text: "終了時間を教えて下さい。"
              }
            },
            jobname: {
              message_to_confirm: {
                  type: "text",
                  text: "作業内容を教えて下さい。（例：勤務登録）"
              }
            }
        };
    }
    

    // パラメーターが全部揃ったら実行する処理を記述します。
    async finish(bot, event, context){
      //let movie = await movie_service.getDetail(context.confirmed.movie.toString());
      let message = {
          type: "text",
          text: `${context.confirmed.username} 様の ${context.confirmed.date}勤務登録 ${context.confirmed.fromTime} ～  ${context.confirmed.toTime}が完了致しました。`
      };

      await bot.reply(message);
    }
};
