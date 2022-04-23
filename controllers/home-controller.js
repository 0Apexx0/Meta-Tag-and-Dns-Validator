const meta = require('meta-grabber');
const dns = require('dns');


module.exports.home = (req, res) => {
    return res.render('home');
}

module.exports.tagPage = (req, res) => {
    return res.render('metatag', {
        cTag : false ,
        tag: false,
        tagErr : false
    });
}

module.exports.tagChecker = async (req, res) => {
    const metaUrl = req.body.url
    const searchtag = req.body.metaTag
    console.log(metaUrl , " " , searchtag);
    
    try {
        const tag = await meta("https://" + metaUrl);
        
        console.log(tag[searchtag]);
        if(tag[searchtag]){
            console.log('present in meta tag')
            return res.render('metatag', {
                cTag : `${searchtag} : ${tag[searchtag]}`, 
                tag: tag,
                tagErr : false
            });
        }
        return res.render('metatag', {
            cTag : `Tag not found`, 
            tag: tag,
            tagErr : false
        });

    } catch (error) {
        console.log(`Tags for ${metaUrl} not found`);
        return res.render('metatag', {
            cTag : false,
            tag : false ,
            tagErr : `Tags for ${metaUrl} not found`
        })        
    }
}

module.exports.dnsPage = (req, res) => {
    return res.render('dns', {
        dns: false ,
        dnsErr : false
    });
}

module.exports.dnsChecker = (req, res) => {
    const dnsUrl = req.body.url;
    console.log(dnsUrl);

    dns.resolveTxt( dnsUrl , (err, addresses)=>{
        if(err){
            console.log(`dns for ${dnsUrl} not found`);
            return res.render('./dns', {
                dns : false ,
                dnsErr : `dns for ${dnsUrl} not found`
            });
        }
        addresses.forEach((a) => {
            console.log(a);
          });
        return res.render('dns', {
            dns : addresses,
            dnsErr : false
        });
    })
}

