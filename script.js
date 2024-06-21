const update = {
    thread: 'https://www.grandoldteam.com',
    time: 1718895600000
}

const sources = [
    // Tier 1
    { name: 'David Ornstein', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'David_Ornstein' },
    { name: 'Paul Joyce', type: 'journalist', tier: 1, workplace: 'The Times', link: '_pauljoyce' },
    { name: 'Dominic King', type: 'journalist', tier: 1, workplace: 'Daily Mail', link: 'DominicKing_DM' },
    { name: 'Andy Hunter', type: 'journalist', tier: 1, workplace: 'Guardian', link: 'ahunterguardian' },
    { name: 'Chris Bascombe', type: 'journalist', tier: 1, workplace: 'Telegraph', link: '_chrisbascombe' },
    { name: 'Simon Peach', type: 'journalist', tier: 1, workplace: 'PA', link: 'SimonPeach' },
    { name: 'The Bobble', type: 'journalist', tier: 1, workplace: 'X', link: 'ElBobble' },
    { name: 'Patrick Boyland', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'Paddy_Boyland' },
    { name: 'Shamoon Hafez', type: 'journalist', tier: 1, workplace: 'BBC', link: 'ShamoonHafez' },

    // Tier 2
    { name: 'Adam Jones', type: 'journalist', tier: 2, workplace: 'Liverpool Echo', link: 'Adam_Jones94' },
    { name: 'Alan Myers', type: 'journalist', tier: 2, workplace: 'Sky Sports', link: 'AlanMyersMedia' },
    { name: 'Duncan Castles', type: 'journalist', tier: 2, workplace: 'Transfers Podcast', link: 'DuncanCastles' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'X', link: 'FabrizioRomano' },
    { name: 'Joe Thomas', type: 'journalist', tier: 2, workplace: 'Liverpool Echo', link: 'joe_thomas18' },
    { name: 'Lewis Steele', type: 'journalist', tier: 2, workplace: 'Daily Mail', link: 'LewisSteele_' },
    { name: 'Liverpool Echo', type: 'media', tier: 2, link: 'LivEchoEFC' },
    // Tier 3
    { name: 'Pete O Rourke', type: 'journalist', tier: 4, workplace: 'Football Insider', link: 'SportsPeteO' },
    // Tier 4
    { name: 'Kaveh Solhekol', type: 'journalist', tier: 4, workplace: 'Sky Sports', link: 'skykaveh' },
    { name: 'Sacha Tavolieri', type: 'journalist', tier: 4, workplace: 'X', link: 'sachatavolieri' },
    { name: 'The Mirror', type: 'media', tier: 4, link: 'MirrorFootball' },
    // Tier 5
    { name: 'Nicolò Schira', type: 'journalist', tier: 5, workplace: 'X', link: 'NicoSchira' },
    { name: 'RossAftbl', type: 'journalist', tier: 5, workplace: 'X', link: 'RossAftbl' },
    { name: 'Toffee Transfers', type: 'journalist', tier: 5, workplace: 'X', link: 'TransfersToffee' },
    { name: '90min', type: 'media', tier: 5, link: '90min_Football' },
    { name: 'Goodison News', type: 'media', tier: 5, link: 'GoodisonNews' },
    // Aggregators
    { name: 'EFC DAILY', tier: 'aggregator', link: 'EFCDaily_' },
    { name: 'Everton Extra', tier: 'aggregator', link: 'Everton_Extra' },
    { name: 'EvertonNewsFeed', tier: 'aggregator', link: 'EvertonNewsFeed' },
];

sources.forEach(source => {
    document.querySelector(`.tier-${source.tier} .tier-content`).appendChild(
        document.createRange().createContextualFragment(
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : 'aggregator'}" href="https://twitter.com/${source.link}" target="_blank">
            ${source.type !== 'journalist' ? source.name : `${source.name} <span class="workplace">(${source.workplace})</span>`}
            </a>`
        )
    );
})

document.querySelectorAll('.tier-content').forEach(node => {
    const element = node.querySelector('.media, .aggregator');
    if (element && element.classList.contains('media')) {
        node.insertBefore(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
    else if (element && element.classList.contains('aggregator')) {
        node.appendChild(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
})

document.querySelector('.tier-aggregator .tier-content').appendChild(
    document.createRange().createContextualFragment(
        `<div class="tier-notes">Note that the above accounts are just news aggregators. They merely report transfer related stories and rumors, but are not the actual source of the story itself. Please post original sources.</div>`
    )
);

document.querySelector('.last-update a').setAttribute('href', update.thread);
document.querySelector('.last-update a').textContent = `Last update: ${new Date(update.time).toUTCString().slice(0, 16)}`;
