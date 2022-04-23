const meta = require('meta-grabber');
const dns = require('dns');



// Render HomePage
module.exports.home = (req, res) => {
    return res.render('home');
}


// Render Meta Tag Validator Page
module.exports.tagPage = (req, res) => {
    return res.render('metatag', {
        cTag : false ,
        tag: false,
        tagErr : false
    });
}


// First Endpoint to check meta data is present and shown its content
module.exports.tagChecker = async (req, res) => {
    const metaUrl = req.body.url
    const searchtag = req.body.metaTag
    
    try {
        // -------------searching for meta tag
        const tag = await meta("https://" + metaUrl);


        // -------------finding if custom tag available 
        if(tag[searchtag]){
            return res.render('metatag', {
                cTag : `${searchtag} : ${tag[searchtag]}`, 
                tag: tag,
                tagErr : false
            });
        }
        // -----------if custom tag not availabe but tag present 
        return res.render('metatag', {
            cTag : `Tag not found`, 
            tag: tag,
            tagErr : false
        });

    } catch (error) {
        // -----------if tag not present
        return res.render('metatag', {
            cTag : false,
            tag : false ,
            tagErr : `Tags for ${metaUrl} not found`
        })        
    }
}


// Render Dns Validator Page
module.exports.dnsPage = (req, res) => {
    return res.render('dns', {
        dns: false ,
        dnsErr : false
    });
}


// Second Endpoint to check Dns TXT record presend or not and shown its content
module.exports.dnsChecker = (req, res) => {
    const dnsUrl = req.body.url;

    dns.resolveTxt( dnsUrl , (err, addresses)=>{
        if(err){
            // ---------if error found
            return res.render('./dns', {
                dns : false ,
                dnsErr : `dns for ${dnsUrl} not found`
            });
        }

        // -------if Dns found 
        return res.render('dns', {
            dns : addresses,
            dnsErr : false
        });
    })
}

