const handlerFeedback = (e, url, feedback) => {
      let event = {
        name: 'interstitials_feedback_btn',
        payload: {
          url: url,
      	  feedback: feedback
        }
      }
      e.stopPropagation();	    
      window.parent.postMessage(JSON.stringify(event))	    
}
