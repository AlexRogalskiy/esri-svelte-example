import{hT as c,hU as m}from"./vendor.f5642644.js";function p(t,e){for(var a=0;a<e.length;a++){const o=e[a];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(o,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(t)}var i,d,l,u,n={exports:{}};i=n,d=n.exports,l=function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={_decimalSeparator:",",_thousandSeparator:" ",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"dd MMM",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",_duration_second:"ss",_duration_minute:"mm",_duration_hour:"hh",_duration_day:"dd",_duration_week:"ww",_duration_month:"MM",_duration_year:"yyyy",_era_ad:"\u043D.\u044D.",_era_bc:"\u0434\u043E \u043D.\u044D.",A:"\u0423",P:"\u0412",AM:"\u0443\u0442\u0440\u0430",PM:"\u0432\u0435\u0447\u0435\u0440\u0430","A.M.":"\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F","P.M.":"\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F",January:"\u044F\u043D\u0432\u0430\u0440\u044F",February:"\u0444\u0435\u0432\u0440\u0430\u043B\u044F",March:"\u043C\u0430\u0440\u0442\u0430",April:"\u0430\u043F\u0440\u0435\u043B\u044F",May:"\u043C\u0430\u044F",June:"\u0438\u044E\u043D\u044F",July:"\u0438\u044E\u043B\u044F",August:"\u0430\u0432\u0433\u0443\u0441\u0442\u0430",September:"\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",October:"\u043E\u043A\u0442\u044F\u0431\u0440\u044F",November:"\u043D\u043E\u044F\u0431\u0440\u044F",December:"\u0434\u0435\u043A\u0430\u0431\u0440\u044F",Jan:"\u044F\u043D\u0432.",Feb:"\u0444\u0435\u0432\u0440.",Mar:"\u043C\u0430\u0440\u0442",Apr:"\u0430\u043F\u0440.","May(short)":"\u043C\u0430\u0439",Jun:"\u0438\u044E\u043D\u044C",Jul:"\u0438\u044E\u043B\u044C",Aug:"\u0430\u0432\u0433.",Sep:"\u0441\u0435\u043D\u0442.",Oct:"\u043E\u043A\u0442.",Nov:"\u043D\u043E\u044F\u0431.",Dec:"\u0434\u0435\u043A.",Sunday:"\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",Monday:"\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",Tuesday:"\u0432\u0442\u043E\u0440\u043D\u0438\u043A",Wednesday:"\u0441\u0440\u0435\u0434\u0430",Thursday:"\u0447\u0435\u0442\u0432\u0435\u0440\u0433",Friday:"\u043F\u044F\u0442\u043D\u0438\u0446\u0430",Saturday:"\u0441\u0443\u0431\u0431\u043E\u0442\u0430",Sun:"\u0432\u0441.",Mon:"\u043F\u043D.",Tue:"\u0432\u0442.",Wed:"\u0441\u0440.",Thu:"\u0447\u0442.",Fri:"\u043F\u0442.",Sat:"\u0441\u0431.",_dateOrd:function(a){return"-\u043E\u0435"},"Zoom Out":"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",Play:"\u0421\u0442\u0430\u0440\u0442",Stop:"\u0421\u0442\u043E\u043F",Legend:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430","Click, tap or press ENTER to toggle":"\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u043A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C",Loading:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",Home:"\u041D\u0430\u0447\u0430\u043B\u043E",Chart:"\u0413\u0440\u0430\u0444\u0438\u043A","Serial chart":"\u0421\u0435\u0440\u0438\u0439\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430","X/Y chart":"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 X/Y","Pie chart":"\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430","Gauge chart":"\u0414\u0430\u0442\u0447\u0438\u043A-\u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430","Radar chart":"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430","Sankey diagram":"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0421\u044D\u043D\u043A\u0438","Chord diagram":"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 Chord","Flow diagram":"\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0444\u043B\u043E\u0443","TreeMap chart":"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430",Series:"\u0421\u0435\u0440\u0438\u044F","Candlestick Series":"\u0421\u0435\u0440\u0438\u044F-\u043F\u043E\u0434\u0441\u0432\u0435\u0447\u043D\u0438\u043A","Column Series":"\u0421\u0442\u043E\u043B\u0431\u0447\u0430\u0442\u0430\u044F \u0441\u0435\u0440\u0438\u044F","Line Series":"\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u0441\u0435\u0440\u0438\u044F","Pie Slice Series":"\u041A\u0440\u0443\u0433\u043E\u0432\u0430\u044F \u0441\u0435\u0440\u0438\u044F","X/Y Series":"X/Y \u0441\u0435\u0440\u0438\u044F",Map:"\u041A\u0430\u0440\u0442\u0430","Press ENTER to zoom in":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414 \u0447\u0442\u043E\u0431\u0443 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C","Press ENTER to zoom out":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414 \u0447\u0442\u043E\u0431\u044B \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C","Use arrow keys to zoom in and out":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438-\u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C","Use plus and minus keys on your keyboard to zoom in and out":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u043F\u043B\u044E\u0441 \u0438 \u043C\u0438\u043D\u0443\u0441 \u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",Export:"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",Image:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",Data:"\u0414\u0430\u043D\u043D\u044B\u0435",Print:"\u041F\u0435\u0447\u0430\u0442\u0430\u0442\u044C","Click, tap or press ENTER to open":"\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u043A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414 \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C","Click, tap or press ENTER to print.":"\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u043A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414 \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C","Click, tap or press ENTER to export as %1.":"\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u043A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0412\u041E\u0414 \u0447\u0442\u043E\u0431\u044B \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A %1",'To save the image, right-click this link and choose "Save picture as..."':'\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0430\u043A..."','To save the image, right-click thumbnail on the left and choose "Save picture as..."':'\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435 \u0441\u043B\u0435\u0432\u0430 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0430\u043A..."',"(Press ESC to close this message)":"(\u041D\u0430\u0436\u043C\u0438\u0442\u0435 ESC \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435)","Image Export Complete":"\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D","Export operation took longer than expected. Something might have gone wrong.":"\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043D\u044F\u043B\u043E \u0434\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u043E\u0441\u044C. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A.","Saved from":"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0438\u0437",PNG:"PNG",JPG:"JPG",GIF:"GIF",SVG:"SVG",PDF:"PDF",JSON:"JSON",CSV:"CSV",XLSX:"XLSX","Use TAB to select grip buttons or left and right arrows to change selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 TAB, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0443\u043A\u043E\u044F\u0442\u043A\u0438 \u0438\u043B\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u0442\u0440\u0435\u043B\u043E\u043A \u0432\u043B\u0435\u0432\u043E \u0438 \u0432\u043F\u0440\u0430\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use left and right arrows to move selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u043B\u0435\u0432\u043E-\u0432\u043F\u0440\u0430\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use left and right arrows to move left selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u043B\u0435\u0432\u043E-\u0432\u043F\u0440\u0430\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u043B\u0435\u0432\u043E\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use left and right arrows to move right selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u043B\u0435\u0432\u043E-\u0432\u043F\u0440\u0430\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use TAB select grip buttons or up and down arrows to change selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 TAB, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0443\u043A\u043E\u044F\u0442\u043A\u0438 \u0438\u043B\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0432\u0432\u0435\u0440\u0445-\u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use up and down arrows to move selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u0432\u0435\u0440\u0445-\u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use up and down arrows to move lower selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u0432\u0435\u0440\u0445-\u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u043D\u0438\u0436\u043D\u0435\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","Use up and down arrows to move upper selection":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u0432\u0435\u0440\u0445-\u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0445\u043D\u0435\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435","From %1 to %2":"\u041E\u0442 %1 \u0434\u043E %2","From %1":"\u041E\u0442 %1","To %1":"\u0414\u043E %1","No parser available for file: %1":"\u041D\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430 \u0434\u043B\u044F \u0444\u0430\u0439\u043B\u0430: %1","Error parsing file: %1":"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0440\u0430\u0437\u0431\u043E\u0440\u0435 \u0444\u0430\u0439\u043B\u0430: %1","Unable to load file: %1":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B: %1","Invalid date":"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0434\u0430\u0442\u0430"}},(u=l(c,d))!==void 0&&(i.exports=u);const _=m(n.exports),S=Object.freeze(p({__proto__:null,default:_},[n.exports]));export{S as r};
