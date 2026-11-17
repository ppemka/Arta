from pathlib import Path
from html.parser import HTMLParser
from PIL import Image
import json
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.anchors=[]; self.images=[]; self.qa=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and a.get('href','').startswith('#'):self.anchors.append(a['href'][1:])
        if tag=='img' and a.get('src'):self.images.append((a['src'],a.get('alt')))
        if tag=='details':self.qa+=1
p=Page(); s=Path('index.html').read_text(encoding='utf8');p.feed(s)
assert len(p.ids)==len(set(p.ids)), 'duplicate IDs'
assert all(a in p.ids for a in p.anchors), 'broken anchors'
assert p.qa==16
for src,alt in p.images:
    assert alt
    with Image.open(src) as im: im.verify()
assert '\ufffd' not in s
print(json.dumps({'images_valid':len(p.images),'internal_links_valid':len(p.anchors),'questions':p.qa,'utf8':True},indent=2))
