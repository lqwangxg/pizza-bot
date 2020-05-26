'use strict';

module.exports = class GetMovieInfo {

    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor() {
        this.required_parameter = {
            movie: {
                message_to_confirm: {
                    type: "template",
                    text: "映画名を教えて下さい。"
                }
            }
        };
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    async finish(bot, event, context){
        let message = {
            text: `${context.confirmed.name} 様、ご注文ありがとうございました！${context.confirmed.pizza}の${context.confirmed.size}サイズを30分以内にご指定の${context.confirmed.address}までお届けに上がります。`
        };

        await bot.reply(message);
    }
};
