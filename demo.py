# coding=utf-8

import requests
from lxml import etree

url = 'https://cn.ax101.cc/'

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Host': 'cn.ax101.cc',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36'
}

resp = requests.get(url, headers=headers)

print(resp.status_code)

selector = etree.HTML(resp.content.decode('utf-8'))

for each in selector.xpath('//li[@itemprop="itemListElement"]'):
    url = each.xpath('header/h3/a/@href')
    title = each.xpath('header/h3/a/text()')
    print(url, title)

"""
数据样式:

['/watch?v=Kmz8v5w1Bpj'] ['小倉〇子激似のGカップ爆乳に人生初の生ハメ体験 FC2-PPV PPV-1335823']
['/watch?v=DPGB6DRqZl1'] ['男の夢ウハウハ逆3P-さおり 瀬戸レイカ HEYZO 2242']
['/watch?v=apm81dYDB2d'] ['全身をネットリ舐め回す、ナメクジ親父の粘着性交。 久留木玲 JUL-199']
['/watch?v=aodBz3mA8nw'] ['没有台词现场演出在温泉旅行中揭露出女神葵司色情的本性 SSNI-731']
['/watch?v=GJl8N7RbZO6'] ['美乳美マンの小悪魔系ぱっつんボブのロリビッチ少女が膣肉トロトロにして変態オヤジと本気汁溢れ出しファック！ なつめ愛莉 OMT-014']
['/watch?v=4kD8WOYz8m2'] ['被最信赖的人背叛侵犯内射的女教师川上优身心饱受折磨 RBD-560']
['/watch?v=Dl0Xl0RMXQL'] ['かのんちゃん作品300MIUM-532,20歳的経済学部2年生！']
['/watch?v=OyGXjbjmXpY'] ['追求刺激的已婚人妻峰雪遥不满足与早泄的老公下海拍摄AV渴望被男优狠狠蹂躏 DTT-055']
['/watch?v=zmeX3Y0K8pW'] ['黒人中出し！B.B.P.（ビッグ・ブラック・ペニス）規格外の巨根ピストンにお漏らししながらエビ反り絶頂！！ 赤瀬尚子 CESD-892']
['/watch?v=aodBz3638nw'] ['高〇の地理の教師NEWペット\u3000巨乳人妻\u3000学校帰りに不倫バックセックス中に旦那に電話そのまま中出し FC2-PPV PPV-1341721']
['/watch?v=yAO87ewxX3v'] ['新人黑丝人妻女OL伊贺真子在出差地宾馆和绝伦不伦做爱直到天亮 SSNI-761']
['/watch?v=O5YZA1V5Zg6'] ['いきなりバリカタち●ぽにさせてくれるドMで変態クソエロボディーの脳みそバグ子ちゃんを派遣します TIKF-044']
['/watch?v=Kmz8vzO18pj'] [' レイラ作品320MMGH-243,19歳的女子大生！']
['/watch?v=vxRXRLkw8Gn'] ['着衣M男狩り ぴたぴたジーンズハラスメント 星島るり MOPG-058']
['/watch?v=Dl0Xl1wrBQL'] ['朋友豐滿爆乳媽媽發情的暴走雌穴奴隸中出調教計畫 風間ゆみ JUFD-806']
['/watch?v=wRqZPrwWBv7'] ['人妻の花びらめくり 相楽ゆり子 MYBA-021']
['/watch?v=3J4XG0vYBnA'] ['マジ軟派、初撮。 1477 秋葉原で見つけた男装コスプレ店員をホテルに連れ込み！バイセクシャル美少女に数年ぶりのち○ぽ挿入！ 200GANA-2287']
['/watch?v=9VJBkywqZye'] ['21歳 Eカ2回戦！ FC2-PPV PPV-1340616']
['/watch?v=RvzBr0L3Zyx'] ['给巨乳女优河内明日菜下药让男优带回家在狭小的房间内尽情内射 ABP-971']
['/watch?v=Dl0Xl1LPBQL'] ['【初撮り】【純粋うぶ娘】【柔乳パイズリ】Fカップの柔乳20歳。「セックスの良さがわからない..」と言っていた彼女だが.. SIRO-4153']
['/watch?v=7Kq8wz0JB1x'] ['小野寺梨纱浓厚的性爱SEX穿着黑丝渔网袜被干到潮吹内射 HEYZO-1934  1934']
['/watch?v=Kmz8v5KvBpj'] ['Natsu スマイル☆革命・東條なつ REBD-459']
['/watch?v=VMP8n9jkByD'] ['悪徳整体師の媚薬オイルマッサージが効きすぎて黒尻ブンブン追撃騎乗位中出し 今井夏帆 HND-827']
['/watch?v=zq68xm1vZjL'] ['黒髪美少女は隠れビッチ 精子満タンの変態おじさんたちとねっとり体液まみれのセックス撮影会 水嶋アリス JBJB-013']
['/watch?v=QWoXdazABeV'] ['肛門絶叫 デカ尻アナル中毒М嬢 MISM-171']
['/watch?v=6vo8K5N6Xk4'] ['Ako silent beautiness・白石あこ REBD-458']
['/watch?v=OyGXjbwYXpY'] ['ずっとホームページでチェックしていた憧れのデリヘル嬢を何もヤルことないど田舎の僕の地元に遠方派遣させて何度も中出しした思い出 深田えいみ HND-830']
['/watch?v=JVvBEJ398K9'] ['有罪彼女 アイドルと逆恨みのファン達による処刑オフ会 笠木いちか DDK-194']
['/watch?v=Kmz8v5wvBpj'] ['密着セックス～かつての想い人と分かち合う背徳の悦び～ 山口珠理 JUL-198']
['/watch?v=VMP8n9lkByD'] ['告白3秒前…愛する絶倫巨根男に強●孕ませレ×プで泣きイキッ！！ 小泉ひなた HND-822']
['/watch?v=JVvBEJ3q8K9'] ['素人あべみかこ ツンデレオタクAV女優が素を曝け出し何度も巨根で完全ガチイキ！！ IKEP-005']
['/watch?v=DPGB6DwMZl1'] ['猛暑で理性が狂った母子の、汗だく中出し帰省相姦。 岡江凛 JUL-201']

"""