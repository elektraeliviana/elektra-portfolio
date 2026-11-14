import urllib.request
import re

url = 'https://elektra-portfolio-nwvb.vercel.app/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=15) as res:
        html = res.read().decode('utf-8', errors='ignore')
        
    print(f"Page size: {len(html)} bytes")
    # Section IDs
    section_matches = re.findall(r'<section[^>]+id=["\']([^"\']+)["\']', html)
    print("Section IDs:", section_matches)
    
    # Nav links
    nav_links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html)
    print("Nav links:", [(href, text.strip()) for href, text in nav_links if href.startswith('#')])
    
    # Check works section specifically
    has_works_section = 'id="works"' in html or 'id=\'works\'' in html
    print("Has id='works' section:", has_works_section)
    
    if has_works_section:
        works_part = re.search(r'<section[^>]+id=["\']works["\'].*?</section>', html, re.DOTALL)
        if works_part:
            print("Works section snippet (first 300 chars):")
            print(works_part.group(0)[:300])
    
    # Check data/works.json fetch
    print("Mentions works.json in scripts or html:", 'works.json' in html)
    
    # Check js/app.js on live site
    app_js_url = url + 'js/app.js'
    try:
        req_js = urllib.request.Request(app_js_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_js, timeout=10) as res_js:
            js_content = res_js.read().decode('utf-8', errors='ignore')
            print(f"app.js size: {len(js_content)} bytes")
            print("Mentions renderWorksGrid in live app.js:", 'renderWorksGrid' in js_content)
            print("Mentions works.json in live app.js:", 'works.json' in js_content)
    except Exception as e:
        print("Error fetching live app.js:", e)

    # Check works.json on live site
    works_json_url = url + 'data/works.json'
    try:
        req_json = urllib.request.Request(works_json_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_json, timeout=10) as res_json:
            json_content = res_json.read().decode('utf-8', errors='ignore')
            print(f"data/works.json size: {len(json_content)} bytes")
            print("Live works.json first 200 chars:")
            print(json_content[:200])
    except Exception as e:
        print("Error fetching live works.json:", e)

except Exception as e:
    print("Error fetching page:", e)
