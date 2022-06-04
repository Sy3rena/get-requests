const axios = require("axios");
const dns = require("dns");

const func = (link) => {
    dns.resolve4( link, function (err, addresses) {
        if (err) {
            console.log (`${link} does not exist`);
        }
        else {
            axios({
                url: `http://${link}`
            }).then((r) => {
                console.log(r.data);
            }).catch((r) => {
                console.log(r);
            })
        }
    });
}

for(let i = 0; i != 1; i++) {
    func("name.domen"); // Link to the website
}