(() => {
    const accordionContent = document.querySelector('.accordion');

    const questions = [
        {
            title: `Why shouldn't we trust atoms?`,
            paraph: `They make up everything¡`
        },
        {
            title: `What do you call someone with no body and no nose?`,
            paraph: `Nobody knowns.`
        },
        {
            title: `What's the object-oriented way to become wealthy?`,
            paraph: `Inheritance.`
        },
        {
            title: `How many tickles does it take to tickle an octopus?`,
            paraph: `Then-tickles!`
        },
        {
            title: `What is: 1 + 1?`,
            paraph: `Depends on who are you asking.`
        }
    ];


    const loadOpotions = () => {
        questions.forEach(question => {
            const option = `
                <div class="option">
                    <section class="content-text">
                        <p class="title">${question.title}</p>
                        <span class="paragraph">${question.paraph}</span>
                    </section>
                    <img alt="icon accordeon" src="../public/images/arrow-down.svg" class="image-icon" onclick='showAccordeonContent(event)'/>
                </div>
            `;
            accordionContent.insertAdjacentHTML('beforeend', option);
        });
    }


    window.showAccordeonContent = (event) => {
        const parentNode = event.target.parentNode;
        for (const tags of parentNode.children) {
            tags.classList.toggle('show')
        }
    }

    loadOpotions();
})();