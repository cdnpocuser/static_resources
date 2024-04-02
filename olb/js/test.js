const handlerFeedback = (e, url, feedback) => {
      let event = {
        name: 'interstitials_feedback_btn',
        payload: {
          url: url,
      	  feedback: feedback
        }
      }
      e.stopPropagation();	    
      window.parent.postMessage(JSON.stringify(event));
      if (url) {
	    const newTab = window.open(url, '_blank');
        if (newTab) {
          newTab.focus();
        }
      } 
}
