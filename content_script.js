/**
 * Checks Google search query for @gpt and redirects to ChatGPT if found
 * @param {none}
 * @return {void}
 */
(function() {
    let params     = new URLSearchParams(window.location.search)
    let query      = params.get('q')
    let hasGptFlag = query && query.includes('@gpt')
    
    if ( hasGptFlag ) {
        let searchTerms = query.replace('@gpt', '').trim()
        window.location.href = `https://chatgpt.com/?q=${encodeURIComponent(searchTerms)}&hints=search&ref=ext`
    }
})()
