import {bot} from '../config.js';
import { getUndress } from './getData.js';
import { getBuy } from './getData.js';
import { getProfile } from './getData.js';

export const formatedTextTreatments = `💳 <b>Покупка VIP-обработок</b> 

🏝️VIP-обработки позволят вам получать фотографии от бота без блюра!

💡Также вы получите приоритетную очередь!`;

export const formatedTextRazdevator = `<b>DeepNude Раздеватор 18+</b>

Наша нейросеть единственная раздевает даже в закрытой одежде!

💡 Просто отправь нужную фотографию!`;

export function getDataProfile (arg1, arg2) {
    return ` , добро пожаловать в твой профиль!
    
<b>💰 Платные попытки</b> - ${arg2}
<b>💯 Бесплатные попытки</b> - ${arg1}
    
    <b>Обратите внимание, что бесплатные обработки дают возможность просмотреть результат с блюром!
    А VIP-обработки позволяют отправлять фото без блюра!</b>
    
    Приобрести VIP-обработки можно по кнопке ниже!`
}

bot.hears('⚡ Обработки', ctx => {
    getBuy(ctx);
  })  
  
  bot.hears('❤️ Раздеть', ctx => {
    getUndress(ctx);
  })

  bot.hears('😎 Профиль', ctx => {
    getProfile(ctx);
   }) 