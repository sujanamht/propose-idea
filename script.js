function page() {
    let please = false;
    let p = null;
  
    function setPlease(newValue) {
      please = newValue;
    }
  
    function setP(newP) {
      p = newP;
    }
  
    function prettyPlease() {
      setPlease(!please);
    }
  
    function nope() {
      const x = Math.random() * 90;
      const y = Math.random() * 90;
  
      setP({ x: `${x}%`, y: `${y}%` });
    }
  
    // Function to handle when no button is hovered or clicked
    function handleNope(event) {
      if (event.target.closest('.no') === null) {
        nope();
      }
    }
  
    // Attaching event listeners to the document body
    document.body.addEventListener('mouseover', handleNope);
    document.body.addEventListener('click', handleNope);
  
    // Return necessary values
    return {
      please,
      prettyPlease,
      p,
      nope
    };
  }
  
  const pageInstance = page(); // Initialize the page instance
  