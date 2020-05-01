function slide(e, carousel) {
    carousel.style.transition = 'none';
    let startX = e.changedTouches[0].clientX;
    let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
    let width = parseFloat(getComputedStyle(carousel).width);
    let blocksAmount = this.state.cards.length;
    let { currentIndex } = this.state;
    let diffX = null;
    let lastX = startX;

    let touchMove = e => {
        let x = e.changedTouches[0].clientX;
        carousel.style.marginLeft = `${-margin + x - startX}px`;
        diffX = x > lastX ? -1 : 1;
        lastX = x;
    }
    
    let checkPoints = [];
    for (let i = 0; i < blocksAmount; ++i) {
        checkPoints[i] = i * width / blocksAmount;
    }
    let max = checkPoints[blocksAmount - 1];

    let touchEnd = e => {
        let endX = e.changedTouches[0].clientX;
        carousel.style.transition = 'margin-left .3s ease-out';
        if (diffX === 1 && startX > endX) {
            carousel.style.marginLeft = `-${checkPoints[currentIndex + 1] || max}px`;
            currentIndex = Math.min(currentIndex + 1, blocksAmount - 1);
        } else if (diffX === -1 && endX > startX) {
            carousel.style.marginLeft = `-${checkPoints[currentIndex - 1] || 0}px`;
            currentIndex = Math.max(currentIndex - 1, 0);
        } else {
            carousel.style.marginLeft = `-${margin}px`;
        }
        this.setState({ currentIndex: currentIndex });
        carousel.removeEventListener('touchend', touchEnd);
    }
    carousel.addEventListener('touchmove', touchMove);
    carousel.addEventListener('touchend', touchEnd);
}

export default slide;