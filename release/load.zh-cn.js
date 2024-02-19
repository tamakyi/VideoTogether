
(function () {
    let version = '1708352814'

    try {
        eval(document.currentScript.getAttribute("cachedvt"));
    } catch (e) { console.error(e) }

    try {
        if (window.videoTogetherExtension == undefined) {
            let inlineScript = document.createElement("script");
            inlineScript.textContent = document.currentScript.getAttribute("cachedvt");
            document.head.appendChild(inlineScript);
        }
    } catch (e) { console.error(e) }


    let language = "zh-cn";

    if (window.videoTogetherExtension == undefined) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        try {
            script.src = `https://api.tama.host/videotogether/release/vt.${language}.user.js?timestamp=` + version;
        } catch {
            // this is a very secure site. don't inject
            document.querySelector("#videoTogetherLoading").remove();
        }
        try {
            document.body.appendChild(script);
        } catch { };
    }

    // fallback to china service
    setTimeout(() => {
        try {
            document.querySelector("#videoTogetherLoading").remove()
        } catch { }

        if (window.videoTogetherExtension == undefined) {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://img-tama-guru.oss-cn-hongkong.aliyuncs.com/videotogether/release/vt.${language}.user.js`;
            try {
                document.body.appendChild(script);
            } catch { };
        }
    }, 5000);
})()