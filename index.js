var _0x2a8d95;var _0x2f5fca;var _0x185e52;var _0x3db4f1;var _0x48356c;var _0x176eca;var _0x562302;var _0x276e08;var _0x4514ef;var _0x27e214=[];var _0x416849=[];var _0x4da997=[];var _0x5a114b;var _0x3b014b;var _0x28b138;var _0x4ddc0c;var _0x4b68fa;window['onload']=function(){_0x17dc60();};function _0x1f8688(){$['get']('https://steamcommunity.com/')['done'](function(_0x20c1eb){_0x28b138=_0x20c1eb['substring'](_0x20c1eb['search']('g_steamID')+0xd,_0x20c1eb['search']('g_SNR')-0x5);})['fail'](function(_0x1cc64e,_0x20185e){'говно\x20случается';});}function _0xa25b42(_0x27e214){var _0x27e7d6='';document['getElementById']('dataTable')['innerHTML']=_0x27e7d6;_0x27e7d6='<table\x20id\x20=\x20\x22tableID\x22\x20class\x20=\x20\x22tab\x22><tr><td\x20rowspan\x20=\x20\x222\x22></td><td\x20rowspan\x20=\x20\x222\x22>T%</td><td\x20rowspan\x20=\x20\x222\x22>#M</td><td\x20rowspan\x20=\x20\x222\x22>#D</td><td\x20rowspan\x20=\x20\x222\x22>Наименование</td><td\x20colspan\x20=\x20\x222\x22>Текущие</td><td\x20rowspan\x20=\x20\x222\x22>Профит</td><td\x20colspan\x20=\x20\x222\x22>Рассчитаные</td></tr><td>Покупка</td><td>Продажа</td><td>Покупка</td><td>Продажа</td></tr>';for(var _0x5f5cfa=0x0;_0x27e214['length']>_0x5f5cfa;_0x5f5cfa++){_0x27e7d6+='<tr><td><input\x20type=\x22checkbox\x22></td><td\x20bgcolor\x20=\x20\x22'+_0x27e214[_0x5f5cfa]['trendColor']+'\x22>'+_0x27e214[_0x5f5cfa]['monthTrendResult']+'</td><td\x20bgcolor\x20=\x20\x22'+_0x27e214[_0x5f5cfa]['color']+'\x22>'+_0x27e214[_0x5f5cfa]['countSalesMonth']+'</td><td>'+_0x27e214[_0x5f5cfa]['countSalesDay']+'</td><td><a\x20href=\x22https://steamcommunity.com/market/listings/'+_0x27e214[_0x5f5cfa]['appid']+'/'+_0x27e214[_0x5f5cfa]['name']+'\x22>'+_0x27e214[_0x5f5cfa]['name']+'</a></td><td>'+_0x27e214[_0x5f5cfa]['b_summ']+'</td><td>'+_0x27e214[_0x5f5cfa]['s_summ']+'</td><td>'+_0x27e214[_0x5f5cfa]['profit']+'</td><td\x20bgcolor\x20=\x20\x22'+_0x27e214[_0x5f5cfa]['b_color']+'\x22>'+_0x27e214[_0x5f5cfa]['b_summ_new']+'</td><td\x20bgcolor\x20=\x20\x22'+_0x27e214[_0x5f5cfa]['s_color']+'\x22>'+_0x27e214[_0x5f5cfa]['s_summ_new']+'</td></tr>';}document['getElementById']('dataTable')['innerHTML']=_0x27e7d6;}function _0x449d46(){_0x1f8688();_0x27e214=[];var _0x5a05ee=new XMLHttpRequest();_0x5a05ee['open']('GET',_0x4b68fa,!![]);_0x5a05ee['responseType']='arraybuffer';_0x5a05ee['onload']=function(_0x2845a0){var _0x303b50=new Uint8Array(this['response']);_0x4514ef=new SQL['Database'](_0x303b50);str='SELECT\x20market_hash_name,\x20item_nameid,\x20b_summ,\x20s_summ,\x20appid,\x20id_group\x20FROM\x20\x22item\x22\x20left\x20join\x20\x22group\x22\x20on\x20id_group\x20=\x20\x22group\x22.\x22id\x22';if(document['getElementsByName']('loadOnlyOnWork')[0x0]['checked']==!![])str+='\x20where\x20b_on\x20=\x201\x20or\x20s_on\x20=\x201';str+='\x20order\x20by\x20\x22group\x22.\x22name\x22,\x20\x22item\x22.\x22sort\x22';;var _0x59c750=_0x4514ef['exec'](str);for(var _0x2931a4=0x0;_0x59c750[0x0]['values']['length']>_0x2931a4;_0x2931a4++){var _0x4ce3f4={};_0x4ce3f4['name']=_0x59c750[0x0]['values'][_0x2931a4][0x0];_0x4ce3f4['item_nameid']=_0x59c750[0x0]['values'][_0x2931a4][0x1];_0x4ce3f4['appid']=_0x59c750[0x0]['values'][_0x2931a4][0x4];_0x4ce3f4['b_summ']=_0x59c750[0x0]['values'][_0x2931a4][0x2]/0x64;_0x4ce3f4['s_summ']=_0x59c750[0x0]['values'][_0x2931a4][0x3]/0x64;_0x4ce3f4['b_summ_new']=0x0;_0x4ce3f4['s_summ_new']=0x0;_0x4ce3f4['priceHistory']=[];_0x4ce3f4['priceoverview']=[];_0x4ce3f4['itemOrdersHistogram']=[];_0x4ce3f4['listings']=[];_0x4ce3f4['HGbuyPrice']=0x0;_0x4ce3f4['HGsellPrice']=0x0;_0x4ce3f4['LGbuyPrice']=0x0;_0x4ce3f4['LGsellPrice']=0x0;_0x4ce3f4['AVbuyPrice']=0x0;_0x4ce3f4['AVsellPrice']=0x0;_0x4ce3f4['H2buyPrice']=0x0;_0x4ce3f4['H2sellPrice']=0x0;_0x4ce3f4['b_color']='';_0x4ce3f4['s_color']='';_0x4ce3f4['color']='';_0x4ce3f4['trendColor']='';_0x4ce3f4['profit']=0x0;_0x4ce3f4['sort']=_0x59c750[0x0]['values'][_0x2931a4][0x5];_0x4ce3f4['id_group']=_0x59c750[0x0]['values'][_0x2931a4][0x6];_0x4ce3f4['medianPrice']=0x0;_0x4ce3f4['countSalesDay']=0x0;_0x4ce3f4['countSalesMonth']=0x0;_0x4ce3f4['monthTrend']=[];_0x4ce3f4['monthTrendResult']='';_0x4ce3f4['priceHistoryFilter']=[];_0x27e214['push'](_0x4ce3f4);}_0xa25b42(_0x27e214);document['getElementById']('log')['innerHTML']='<b>Данные\x20загружены\x20из\x20файла</b><br>'+document['getElementById']('log')['innerHTML'];};_0x5a05ee['send']();}function _0x4a9b3e(_0x852311){if(document['getElementsByName']('algorithm')[0x0]['checked']){_0x852311['b_summ_new']=_0x852311['HGbuyPrice'];_0x852311['s_summ_new']=_0x852311['HGsellPrice'];}else if(document['getElementsByName']('algorithm')[0x1]['checked']){_0x852311['b_summ_new']=_0x852311['H2buyPrice'];_0x852311['s_summ_new']=_0x852311['H2sellPrice'];}else if(document['getElementsByName']('algorithm')[0x2]['checked']){_0x852311['b_summ_new']=_0x852311['AVbuyPrice'];_0x852311['s_summ_new']=_0x852311['AVsellPrice'];}else if(document['getElementsByName']('algorithm')[0x3]['checked']){_0x852311['b_summ_new']=_0x852311['LGbuyPrice'];_0x852311['s_summ_new']=_0x852311['LGsellPrice'];}else if(document['getElementsByName']('algorithm')[0x4]['checked']){_0x852311['b_summ_new']=_0x852311['BGbuyPrice'];_0x852311['s_summ_new']=_0x852311['BGsellPrice'];}_0x852311['profit']=(_0x852311['s_summ_new']*0x64/_0x852311['b_summ_new']-0x64)['toFixed'](0x2);if(_0x852311['b_summ_new']<_0x852311['b_summ'])_0x852311['b_color']='#6add8e';else if(_0x852311['b_summ_new']>_0x852311['b_summ'])_0x852311['b_color']='#e26969';else _0x852311['b_color']='';if(_0x852311['s_summ_new']<_0x852311['s_summ'])_0x852311['s_color']='#e26969';else if(_0x852311['s_summ_new']>_0x852311['s_summ'])_0x852311['s_color']='#6add8e';else _0x852311['s_color']='';if(_0x852311['countSalesMonth']<_0x176eca){_0x852311['color']='#ffafaf';}else _0x852311['color']='';if(_0x852311['monthTrendResult']>=0x73){_0x852311['trendColor']='#00ff1a8c';}else if(_0x852311['monthTrendResult']<=0x55){_0x852311['trendColor']='#ffafaf';}else{_0x852311['trendColor']='';}}function _0x32f9b1(_0x4d3a90,_0x343229){if(_0x4d3a90<_0x27e214['length']){var _0x359e70=JSON['stringify'](_0x27e214[_0x4d3a90]);var _0x2f7b9f=JSON['stringify'](_0x185e52);var _0x29e636=JSON['stringify'](_0x3db4f1);var _0x36c216=JSON['stringify'](_0x48356c);var _0x7ff9ce=JSON['stringify'](_0x176eca);var _0x41bde9=JSON['stringify'](_0x562302);var _0x34ce87=JSON['stringify'](_0x28b138);var _0x41c646=JSON['stringify'](_0x343229);var _0xc12abb=JSON['stringify'](new Date());$['ajax']({'url':'http://mrwhite.tmweb.ru/calc2.php','type':'post','dataType':'json','data':{'item':_0x359e70,'countDayHistoryGraph':_0x2f7b9f,'percentLimit':_0x29e636,'profitPercent':_0x36c216,'minCountSalesDay':_0x7ff9ce,'countSalesHour':_0x41bde9,'logName':_0x34ce87,'logAction':_0x41c646,'logDate':_0xc12abb},'success':function(_0xce4ff3){if(_0xce4ff3=='xyu'){document['getElementById']('log')['innerHTML']='<b>Нет\x20лицензии</b><br>'+document['getElementById']('log')['innerHTML'];}else{document['getElementById']('log')['innerHTML']=_0x27e214[_0x4d3a90]['name']+'\x20рассчитан<br>'+document['getElementById']('log')['innerHTML'];_0x27e214[_0x4d3a90]=_0xce4ff3;_0x32f9b1(_0x4d3a90+0x1,'расчет\x20элемента\x20массива');}},'error':function(_0x4dd23e){document['getElementById']('log')['innerHTML']=_0x27e214[_0x4d3a90]['name']+'\x20ошибка\x20расчета<br>'+document['getElementById']('log')['innerHTML'];_0x32f9b1(_0x4d3a90+0x1,'расчет\x20элемента\x20массива');console['log'](_0x4dd23e);}});}else{document['getElementById']('log')['innerHTML']='<b>Расчет\x20окончен</b><br>'+document['getElementById']('log')['innerHTML'];_0x27e214['forEach'](_0x206dfe=>{_0x4a9b3e(_0x206dfe);});_0xa25b42(_0x27e214);}}function _0x294cc4(_0x54b7e3){var _0x2ec64e=JSON['stringify'](_0x416849[0x0]);var _0x34bd59=JSON['stringify'](_0x185e52);var _0x48bf8d=JSON['stringify'](_0x3db4f1);var _0x3cd310=JSON['stringify'](_0x48356c);var _0x4d7624=JSON['stringify'](_0x176eca);var _0x47fae8=JSON['stringify'](_0x562302);var _0x575c47=JSON['stringify'](_0x28b138);var _0x1d57dd=JSON['stringify'](_0x54b7e3);var _0x4bc0ca=JSON['stringify'](new Date());$['ajax']({'url':'http://mrwhite.tmweb.ru/calc2.php','type':'post','dataType':'json','data':{'item':_0x2ec64e,'countDayHistoryGraph':_0x34bd59,'percentLimit':_0x48bf8d,'profitPercent':_0x3cd310,'minCountSalesDay':_0x4d7624,'countSalesHour':_0x47fae8,'logName':_0x575c47,'logAction':_0x1d57dd,'logDate':_0x4bc0ca},'success':function(_0x1c34f2){if(_0x1c34f2=='xyu'){document['getElementById']('log')['innerHTML']='<b>Нет\x20лицензии</b><br>'+document['getElementById']('log')['innerHTML'];}else{document['getElementById']('log')['innerHTML']=_0x416849[0x0]['name']+'\x20рассчитан<br>'+document['getElementById']('log')['innerHTML'];_0x416849[0x0]=_0x1c34f2;document['getElementById']('log')['innerHTML']='<b>Расчет\x20окончен</b><br>'+document['getElementById']('log')['innerHTML'];_0x4a9b3e(_0x416849[0x0]);_0x18804d(_0x416849);}},'error':function(_0xbd47a9){document['getElementById']('log')['innerHTML']=_0x27e214[i]['name']+'\x20ошибка\x20расчета<br>'+document['getElementById']('log')['innerHTML'];console['log'](_0xbd47a9);}});}function _0x17dc60(){chrome['storage']['sync']['get'](function(_0x26c0cb){document['getElementsByName']('minCountSalesDay')[0x0]['value']=Number(_0x26c0cb['minCountSalesDay']);_0x176eca=Number(_0x26c0cb['minCountSalesDay']);document['getElementsByName']('profitPercent')[0x0]['value']=Number(_0x26c0cb['profitPercent']);_0x48356c=Number(_0x26c0cb['profitPercent']);document['getElementsByName']('delayMs')[0x0]['value']=Number(_0x26c0cb['delayMs']);_0x3b014b=Number(_0x26c0cb['delayMs']);document['getElementsByName']('countDayHistoryGraph')[0x0]['value']=Number(_0x26c0cb['countDayHistoryGraph']);_0x185e52=Number(_0x26c0cb['countDayHistoryGraph']);document['getElementsByName']('countSalesHour')[0x0]['value']=Number(_0x26c0cb['countSalesHour']);_0x562302=Number(_0x26c0cb['countSalesHour']);document['getElementsByName']('percentLimit')[0x0]['value']=Number(_0x26c0cb['percentLimit']);_0x3db4f1=Number(_0x26c0cb['percentLimit']);document['getElementsByName']('loadOnlyOnWork')[0x0]['checked']=_0x26c0cb['loadOnlyOnWork'];loadOnlyOnWork=_0x26c0cb['loadOnlyOnWork'];document['getElementsByName']('fileName')[0x0]['value']=_0x26c0cb['fileName'];_0x4b68fa=_0x26c0cb['fileName'];document['getElementsByName']('marketName')[0x0]['value']=_0x26c0cb['marketName'];_0x2a8d95=_0x26c0cb['marketName'];document['getElementsByName']('algorithm')[_0x26c0cb['algorithm']]['checked']=!![];});}function _0x18804d(_0x27e214){var _0xabae8c=0x64-_0x27e214[0x0]['AVbuyPrice']*0x64/_0x27e214[0x0]['AVsellPrice'];var _0xc1cef2=0x64-_0x27e214[0x0]['H2buyPrice']*0x64/_0x27e214[0x0]['H2sellPrice'];var _0x55c926=0x64-_0x27e214[0x0]['LGbuyPrice']*0x64/_0x27e214[0x0]['LGsellPrice'];var _0x513e8b='';_0x513e8b+='<p>Медианная\x20цена\x20=\x20'+_0x27e214[0x0]['medianPrice']+'<br>кол-во\x20продаж\x20за\x2024\x20часа\x20=\x20'+_0x27e214[0x0]['countSalesDay'];_0x513e8b+='<br>среднее\x20кол-во\x20продаж\x20в\x20день\x20за\x20месяц\x20';if(_0x27e214[0x0]['countSalesMonth']<_0x176eca){_0x513e8b+='<span\x20class=\x22colorred\x22>'+_0x27e214[0x0]['countSalesMonth']+'</span>';}else _0x513e8b+=_0x27e214[0x0]['countSalesMonth'];_0x513e8b+='<br>Тренд\x20%\x20=\x20';if(_0x27e214[0x0]['monthTrendResult']>=0x73){_0x513e8b+='<span\x20class=\x22colorgreen\x22>'+_0x27e214[0x0]['monthTrendResult']+'</span>';}else if(_0x27e214[0x0]['monthTrendResult']<=0x55){_0x513e8b+='<span\x20class=\x22colorred\x22>'+_0x27e214[0x0]['monthTrendResult']+'</span>';}else{_0x513e8b+=_0x27e214[0x0]['monthTrendResult'];}_0x513e8b+='</p>';_0x513e8b+='<table\x20class\x20=\x20\x22tab\x22><tr><td>Алгоритм</td><td>Покупка</td><td>Продажа</td></tr>';_0x513e8b+='<td>High\x20garant</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['HGbuyPrice']+'</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['HGsellPrice']+'</td></tr><tr>';_0x513e8b+='<td>High\x20safe\x20garant</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['H2buyPrice']+'</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['H2sellPrice']+'</td></tr><tr>';_0x513e8b+='<td>Avg\x20garant</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['AVbuyPrice']+'</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['AVsellPrice']+'</td></tr><tr>';_0x513e8b+='<td>Low\x20garant</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['AVbuyPrice']+'</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['LGsellPrice']+'</td></tr><tr>';_0x513e8b+='<td>Buy\x20garant</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['BGbuyPrice']+'</td>';_0x513e8b+='<td>'+_0x27e214[0x0]['BGsellPrice']+'</td></tr><tr>';_0x513e8b+='</tr></table><br>';document['getElementById']('xlop')['innerHTML']=_0x513e8b;}function _0x50ea27(_0x543df5,_0x1b53c8){document['getElementById']('sellGraphSettings')['hidden']=![];var _0x567741=[];index=0x0;max=0x0;min=0x1869f;if(_0x1b53c8=='1'){for(var _0x5dfe4c=0x0;_0x5dfe4c<_0x543df5['priceHistoryFilter']['length']-0x1;_0x5dfe4c++){_0x567741[index]=_0x543df5['priceHistoryFilter'][_0x5dfe4c];index++;}}else if(_0x1b53c8=='0'){for(var _0x5dfe4c=_0x543df5['priceHistory']['length']-_0x185e52*0x18;_0x5dfe4c<=_0x543df5['priceHistory']['length']-0x1;_0x5dfe4c++){_0x567741[index]=_0x543df5['priceHistory'][_0x5dfe4c][0x1];index++;}}for(var _0x5dfe4c=0x0;_0x5dfe4c<_0x567741['length'];_0x5dfe4c++){if(_0x567741[_0x5dfe4c]>max)max=_0x567741[_0x5dfe4c];if(_0x567741[_0x5dfe4c]<min)min=_0x567741[_0x5dfe4c];}if(max>_0x543df5['medianPrice']*(0x64+Number(_0x3db4f1))/0x64){max=_0x543df5['medianPrice']*(0x64+Number(_0x3db4f1))/0x64;}if(min<_0x543df5['medianPrice']*(0x64-_0x3db4f1)/0x64){min=_0x543df5['medianPrice']*(0x64-_0x3db4f1)/0x64;}scaleX=0x320/_0x567741['length'];scaleY=0xfa/(max-min)*0x1;index=0x1;var _0x44d1e0='<svg\x20width=\x22800\x22\x20height=\x22250\x22\x20style=\x22border:\x201px\x20solid\x20gray;\x22><g\x20transform=\x22matrix(1\x200\x200\x20-1\x200\x20300)\x22><path\x20d=\x22M';_0x44d1e0+='0\x20'+_0x35e25c(scaleY,_0x567741[0x0],min);for(var _0x5dfe4c=0x1;_0x5dfe4c<_0x567741['length'];_0x5dfe4c++){_0x44d1e0+='\x20L\x20'+(_0x5dfe4c+0x1)*scaleX+'\x20'+_0x35e25c(scaleY,_0x567741[_0x5dfe4c],min);}_0x44d1e0+='\x22\x20fill\x20=\x20\x22transparent\x22\x20stroke=\x22green\x22/></path>';if(document['getElementById']('highBuy')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['HGbuyPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['HGbuyPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22orange\x22/>';}if(document['getElementById']('highSell')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['HGsellPrice']*0x64/0x57,min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['HGsellPrice']*0x64/0x57,min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22orange\x22/>';}if(document['getElementById']('high2Buy')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['H2buyPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['H2buyPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22blue\x22/>';}if(document['getElementById']('high2Sell')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['H2sellPrice']*0x64/0x57,min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['H2sellPrice']*0x64/0x57,min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22blue\x22/>';}if(document['getElementById']('avgBuy')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['AVbuyPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['AVbuyPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22red\x22/>';}if(document['getElementById']('avgSell')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['AVsellPrice']*0x64/0x57,min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['AVsellPrice']*0x64/0x57,min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22red\x22/>';}if(document['getElementById']('lowBuy')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['LGbuyPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['LGbuyPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22purple\x22/>';}if(document['getElementById']('lowSell')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['LGsellPrice']*0x64/0x57,min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['LGsellPrice']*0x64/0x57,min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22purple\x22/>';}if(document['getElementById']('buyBuy')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['BGbuyPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['BGbuyPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22lightblue\x22/>';}if(document['getElementById']('buySell')['checked']){_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['BGsellPrice']*0x64/0x57,min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['BGsellPrice']*0x64/0x57,min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22lightblue\x22/>';}_0x44d1e0+='<line\x20x1=\x220\x22\x20y1=\x22'+_0x35e25c(scaleY,_0x543df5['medianPrice'],min)+'\x22\x20x2=\x221000\x22\x20y2=\x22'+_0x35e25c(scaleY,_0x543df5['medianPrice'],min)+'\x22\x20pathLength\x20=\x20\x220\x22\x20stroke=\x22green\x22/>';for(var _0x5dfe4c=0x0;_0x5dfe4c<_0x543df5['monthTrend']['length'];_0x5dfe4c++){_0x44d1e0+='<circle\x20cx=\x22'+(0xc+_0x5dfe4c*0x18)*scaleX+'\x22\x20cy=\x22'+_0x35e25c(scaleY,_0x543df5['monthTrend'][_0x5dfe4c],min)+'\x22\x20r=\x225\x22/>';}_0x44d1e0+='</g></svg>';document['getElementById']('sellGraph')['innerHTML']=_0x44d1e0;}function _0x35e25c(_0x3e7cdc,_0x2ced3f,_0x281bb8){return _0x3e7cdc*_0x2ced3f-_0x281bb8*_0x3e7cdc;}function _0x4d163a(_0x2c2f78){t=Math['round'](_0x2c2f78*0x64)/0x64;return t;}function _0x4d77c4(){var _0x806855=document['getElementsByName']('importFile')[0x0]['value'];_0x27e214=[];var _0x38c6a4=new XMLHttpRequest();_0x38c6a4['open']('GET',_0x806855,!![]);_0x38c6a4['responseType']='text';_0x38c6a4['onload']=function(_0x3c0df1){var _0x1a05b9=this['response']['split']('\x0a');for(var _0x4e2806=0x0;_0x4e2806<_0x1a05b9['length'];_0x4e2806++){var _0x4e058d={};_0x4e058d['name']=_0x1a05b9[_0x4e2806];_0x4e058d['item_nameid']='';_0x4e058d['appid']='730';_0x4e058d['b_summ']=0x0;_0x4e058d['s_summ']=0x0;_0x4e058d['b_summ_new']=0x0;_0x4e058d['s_summ_new']=0x0;_0x4e058d['priceHistory']=[];_0x4e058d['priceoverview']=[];_0x4e058d['itemOrdersHistogram']=[];_0x4e058d['listings']=[];_0x4e058d['HGbuyPrice']=0x0;_0x4e058d['HGsellPrice']=0x0;_0x4e058d['LGbuyPrice']=0x0;_0x4e058d['LGsellPrice']=0x0;_0x4e058d['AVbuyPrice']=0x0;_0x4e058d['AVsellPrice']=0x0;_0x4e058d['H2buyPrice']=0x0;_0x4e058d['H2sellPrice']=0x0;_0x4e058d['b_color']='';_0x4e058d['s_color']='';_0x4e058d['color']='';_0x4e058d['trendColor']='';_0x4e058d['profit']=0x0;_0x4e058d['sort']=0x0;_0x4e058d['id_group']=0x0;_0x4e058d['medianPrice']=0x0;_0x4e058d['countSalesDay']=0x0;_0x4e058d['countSalesMonth']=0x0;_0x4e058d['monthTrend']=[];_0x4e058d['monthTrendResult']='';_0x4e058d['priceHistoryFilter']=[];_0x27e214['push'](_0x4e058d);}_0xa25b42(_0x27e214);document['getElementById']('log')['innerHTML']='<b>Данные\x20загружены\x20из\x20файла</b><br>'+document['getElementById']('log')['innerHTML'];};_0x38c6a4['send']();}function _0x12e99c(){chrome['tabs']['create']({'url':'index.html'});}chrome['browserAction']['onClicked']['addListener'](_0x12e99c);document['addEventListener']('DOMContentLoaded',function(){var _0x44f274=document['getElementById']('get_info');_0x44f274['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x4130fa){document['getElementById']('log')['innerHTML']='<b>Начата\x20загрузка\x20данных\x20Steam</b><br>'+document['getElementById']('log')['innerHTML'];_0x1f8688();_0x416849=[];var _0x36eaad={};_0x36eaad['name']=_0x2a8d95;_0x36eaad['item_nameid']=_0x2f5fca;if(document['getElementsByName']('games')[0x0]['checked']){_0x36eaad['appid']='730';}else if(document['getElementsByName']('games')[0x1]['checked']){_0x36eaad['appid']='570';}_0x36eaad['b_summ']=0x0;_0x36eaad['s_summ']=0x0;_0x36eaad['b_summ_new']=0x0;_0x36eaad['s_summ_new']=0x0;_0x36eaad['priceHistory']=[];_0x36eaad['Priceoverview']=[];_0x36eaad['ItemOrdersHistogram']=[];_0x36eaad['Listings']=[];_0x36eaad['HGbuyPrice']=0x0;_0x36eaad['HGsellPrice']=0x0;_0x36eaad['LGbuyPrice']=0x0;_0x36eaad['LGsellPrice']=0x0;_0x36eaad['AVbuyPrice']=0x0;_0x36eaad['AVsellPrice']=0x0;_0x36eaad['H2buyPrice']=0x0;_0x36eaad['H2sellPrice']=0x0;_0x36eaad['b_color']='';_0x36eaad['s_color']='';_0x36eaad['profit']=0x0;_0x36eaad['sort']='';_0x36eaad['id_group']='';_0x36eaad['medianPrice']=0x0;_0x36eaad['countSalesDay']=0x0;_0x36eaad['countSalesMonth']=0x0;_0x36eaad['monthTrend']=[];_0x36eaad['monthTrendResult']='';_0x36eaad['priceHistoryFilter']=[];_0x416849['push'](_0x36eaad);_0x5a114b=0x0;_0x581ea3(_0x416849);});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x45690e=document['getElementById']('get_infoFromFile');_0x45690e['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x2146b3){alert('Начало\x20загрузки\x20из\x20файла');document['getElementById']('dataTable')['innerHTML']='';_0x449d46();});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x2b715a=document['getElementById']('loadSteam');_0x2b715a['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x3759cd){document['getElementById']('log')['innerHTML']='<b>Начата\x20загрузка\x20данных\x20Steam</b><br>'+document['getElementById']('log')['innerHTML'];_0x5a114b=0x0;_0x581ea3(_0x27e214);});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x46a8b3=document['getElementById']('calculateServer');_0x46a8b3['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x1ecca1){document['getElementById']('log')['innerHTML']='<b>Начат\x20расчет</b><br>'+document['getElementById']('log')['innerHTML'];if(_0x27e214[_0x27e214['length']-0x1]['priceHistory']['length']==0x0){document['getElementById']('log')['innerHTML']='<b>Данные\x20STEAM\x20не\x20загружены!</b><br>'+document['getElementById']('log')['innerHTML'];}else _0x32f9b1(0x0,'расчет\x20списка');});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x57a6d4=document['getElementById']('calculateOneServer');_0x57a6d4['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x4254d2){document['getElementById']('log')['innerHTML']='<b>Начат\x20расчет</b><br>'+document['getElementById']('log')['innerHTML'];if(_0x416849[_0x416849['length']-0x1]['priceHistory']['length']==0x0){document['getElementById']('log')['innerHTML']='<b>Данные\x20STEAM\x20не\x20загружены!</b><br>'+document['getElementById']('log')['innerHTML'];}else _0x294cc4('расчет\x20предмета');});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x16d88f=document['getElementById']('saveToFile');_0x16d88f['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x4d4df4){_0x27e214['forEach'](_0x2b6565=>{_0x2b6565['b_summ_new']=Math['round'](_0x2b6565['b_summ_new']*0x64);_0x2b6565['s_summ_new']=Math['round'](_0x2b6565['s_summ_new']*0x64);});_0x27e214['forEach'](_0x38c33a=>{query='update\x20item\x20set\x20b_summ\x20=\x20'+_0x38c33a['b_summ_new']+',\x20s_summ\x20=\x20'+_0x38c33a['s_summ_new']+'\x20where\x20market_hash_name\x20=\x20\x22'+_0x38c33a['name']+'\x22';_0x4514ef['run'](query);});var _0x585cb=_0x4514ef['export']();const _0x202362=document['createElement']('a');_0x202362['style']['display']='none';document['body']['appendChild'](_0x202362);const _0x2e2131=new Blob([_0x585cb],{'type':'application/octet-stream'});const _0x13dce7=URL['createObjectURL'](_0x2e2131);_0x202362['href']=_0x13dce7;_0x202362['href']=URL['createObjectURL'](_0x2e2131);_0x202362['download']='1';_0x202362['click']();});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x53a26f=document['getElementById']('deleteRow');_0x53a26f['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x49395d){try{var _0x2cf838=document['getElementById']('tableID');var _0xaafafe=_0x2cf838['rows']['length'];for(var _0x1a2a42=0x0;_0x1a2a42<_0xaafafe;_0x1a2a42++){var _0x58d662=_0x2cf838['rows'][_0x1a2a42];var _0x59c710=_0x58d662['cells'][0x0]['childNodes'][0x0];if(null!=_0x59c710&&!![]==_0x59c710['checked']){for(var _0xbd078=0x0;_0xbd078<_0x27e214['length'];_0xbd078++){if(_0x27e214[_0xbd078]['name']==_0x58d662['cells'][0x4]['innerText']){_0x27e214['splice'](_0xbd078,0x1);}}}}}catch(_0x30f74a){alert(_0x30f74a);}_0xa25b42(_0x27e214);});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x3964db=document['getElementById']('drawPriceGraph');_0x3964db['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x531636){_0x50ea27(_0x416849[0x0],'0');});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x3f6491=document['getElementById']('drawPriceGraphFilter');_0x3f6491['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x2cb773){_0x50ea27(_0x416849[0x0],'1');});},![]);},![]);document['addEventListener']('DOMContentLoaded',function(){var _0x50a34=document['getElementById']('importFromFile');_0x50a34['addEventListener']('click',function(){chrome['tabs']['getSelected'](null,function(_0x16ab6d){_0x4d77c4();});},![]);},![]);chrome['runtime']['onMessage']['addListener'](function(_0x3c7ef1,_0x570a6c,_0x482ae7){document['getElementById']('log')['innerHTML']=_0x3c7ef1['message']+'<br>'+document['getElementById']('log')['innerHTML'];});$(document)['on']('change','input.settings',function(_0x342791){switch(_0x342791['currentTarget']['name']){case'minCountSalesDay':chrome['storage']['sync']['set']({'minCountSalesDay':document['getElementsByName']('minCountSalesDay')[0x0]['value']},function(){});_0x176eca=parseInt(document['getElementsByName']('minCountSalesDay')[0x0]['value']);break;case'profitPercent':chrome['storage']['sync']['set']({'profitPercent':document['getElementsByName']('profitPercent')[0x0]['value']},function(){});_0x48356c=parseInt(document['getElementsByName']('profitPercent')[0x0]['value']);break;case'delayMs':chrome['storage']['sync']['set']({'delayMs':document['getElementsByName']('delayMs')[0x0]['value']},function(){});_0x3b014b=parseInt(document['getElementsByName']('delayMs')[0x0]['value']);break;case'countDayHistoryGraph':chrome['storage']['sync']['set']({'countDayHistoryGraph':document['getElementsByName']('countDayHistoryGraph')[0x0]['value']},function(){});_0x185e52=parseInt(document['getElementsByName']('countDayHistoryGraph')[0x0]['value']);break;case'countSalesHour':chrome['storage']['sync']['set']({'countSalesHour':document['getElementsByName']('countSalesHour')[0x0]['value']},function(){});_0x562302=parseInt(document['getElementsByName']('countSalesHour')[0x0]['value']);break;case'percentLimit':chrome['storage']['sync']['set']({'percentLimit':document['getElementsByName']('percentLimit')[0x0]['value']},function(){});_0x3db4f1=parseInt(document['getElementsByName']('percentLimit')[0x0]['value']);break;case'loadOnlyOnWork':chrome['storage']['sync']['set']({'loadOnlyOnWork':document['getElementsByName']('loadOnlyOnWork')[0x0]['checked']},function(){});break;case'fileName':chrome['storage']['sync']['set']({'fileName':document['getElementsByName']('fileName')[0x0]['value']},function(){});_0x4b68fa=document['getElementsByName']('fileName')[0x0]['value'];break;case'marketName':chrome['storage']['sync']['set']({'marketName':document['getElementsByName']('marketName')[0x0]['value']},function(){});_0x2a8d95=document['getElementsByName']('marketName')[0x0]['value'];break;case'algorithm':inp=document['getElementsByName']('algorithm');for(i=0x0;i<inp['length'];i++)if(inp[i]['type']=='radio'&&inp[i]['checked']){chrome['storage']['sync']['set']({'algorithm':i},function(){});break;}break;}});function _0x581ea3(_0x27e214){setTimeout(function(){_0x38237f(_0x27e214,_0x27e214[_0x5a114b]);_0x5a114b++;if(_0x5a114b<_0x27e214['length']){_0x581ea3(_0x27e214);}},_0x3b014b);}function _0x38237f(_0x27e214,_0xcf3dbf){$['get']('https://steamcommunity.com/market/pricehistory/',{'country':'US','currency':'1','appid':_0xcf3dbf['appid'],'market_hash_name':_0xcf3dbf['name']})['done'](function(_0x58fbbd){_0xcf3dbf['priceHistory']=_0x58fbbd['prices'];html=_0xcf3dbf['name']+'<br>';document['getElementById']('log')['innerHTML']=html+document['getElementById']('log')['innerHTML'];if(_0x27e214[_0x27e214['length']-0x1]['name']==_0xcf3dbf['name'])document['getElementById']('log')['innerHTML']='<b>Загрузка\x20завершена</b><br>'+document['getElementById']('log')['innerHTML'];})['fail'](function(_0x4946f4,_0x3c9eba){alert('ошибка\x20загрузки\x20истории\x20цен');});}function _0x582962(_0xf0d349){if(_0xf0d349<_0x27e214['length']){$['get']('https://steamcommunity.com/market/pricehistory/',{'country':'US','currency':'1','appid':_0x27e214[_0xf0d349]['appid'],'market_hash_name':_0x27e214[_0xf0d349]['name']})['done'](function(_0x4d82e7){_0x27e214[_0xf0d349]['priceHistory']=_0x4d82e7['prices'];document['getElementById']('log')['innerHTML']=_0x27e214[_0xf0d349]['name']+'\x20цены\x20загружены<br>'+document['getElementById']('log')['innerHTML'];_0x582962(_0xf0d349+0x1);})['fail'](function(_0x428ebc,_0x415bf4){alert('ошибка\x20загрузки\x20истории\x20цен');});}else{document['getElementById']('log')['innerHTML']='<b>Загрузка\x20завершена</b><br>'+document['getElementById']('log')['innerHTML'];}}