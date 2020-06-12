function slide(e, carousel) {
    if(carousel.children.length <= 1) return;

    // let transitionProps = getComputedStyle(carousel).transitionProperty;
    // carousel.style.transitionProperty = transitionProps.slice().replace(/(margin-left,|, margin-left|margin-left)/, '');
    carousel.style.transitionProperty = 'transform';
    
    let startX = e.changedTouches[0].clientX;
    let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
    let width = parseFloat(getComputedStyle(carousel).width);
    let blocksAmount = this.props.cards.length;
    let { currCard } = this.props;
    // console.log(currentIndex)
    let diffX = null;
    let lastX = startX;

    let touchMove = e => {
        let x = e.changedTouches[0].clientX;
        if (Math.abs(x - startX) < 30) return;
        carousel.addEventListener('touchend', touchEnd);
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
        carousel.style.transitionProperty = 'margin-left, transform';
        if (diffX === 1 && startX > endX) {
            carousel.style.marginLeft = `-${checkPoints[currCard + 1] || max}px`;
            currCard = Math.min(currCard + 1, blocksAmount - 1);
        } else if (diffX === -1 && endX > startX) {
            carousel.style.marginLeft = `-${checkPoints[currCard - 1] || 0}px`;
            currCard = Math.max(currCard - 1, 0);
        } else {
            carousel.style.marginLeft = `-${margin}px`;
        }
        // this.setState({ currentIndex: currentIndex });
        this.props.setCurrCard(currCard);
        carousel.removeEventListener('touchmove', touchMove);
        carousel.removeEventListener('touchend', touchEnd);
    }
    carousel.addEventListener('touchmove', touchMove);
}

export default slide;