if (document.readyState === 'interactive') {
    document.querySelectorAll('.image').forEach(element => {
        const imageSource = element.dataset['src'].replace('.', '')
        
        if (window.innerWidth <= 672) {
            element.src = imageSource.replace('.', '-mobile.')
        } else element.src = imageSource.replace('.', '-desktop.')
    })
}