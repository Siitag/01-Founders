function build(amount) {
    let counter = 1;
    const interval = setInterval(() => {
      const brick = document.createElement('div');
      brick.id = `brick-${counter}`;
      if (counter % 3 === 2) {
        brick.dataset.foundation = true;
      }
      document.body.appendChild(brick);
      counter++;
      if (counter > amount) {
        clearInterval(interval);
      }
    }, 100);
  }
  function repair(...ids) {
    ids.forEach(id => {
      const brick = document.getElementById(id);
      if (brick) {
        if (brick.dataset.foundation) {
          brick.dataset.repaired = 'in progress';
        } else {
          brick.dataset.repaired = true;
        }
      }
    });
  }
  function destroy() {
    const bricks = document.querySelectorAll('div[id^="brick-"]');
    const lastBrick = bricks[bricks.length - 1];
    if (lastBrick) {
      lastBrick.remove();
    }
  }
  export { build, repair, destroy };