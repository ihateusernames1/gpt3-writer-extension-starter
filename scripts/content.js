chrome.runtime.onMessage.addListener((request, sendResponse) => {
    if (request.message === 'inject') {
        const { content } = request;

        console.log(content);

        sendResponse({ status: 'success' });
    }
});