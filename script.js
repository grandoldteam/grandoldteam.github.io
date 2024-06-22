const update = {
    thread: 'https://www.grandoldteam.com',
    time: 1719047801000
}

const sources = [
    // Tier 1
    { name: 'Andy Hunter', type: 'journalist', tier: 1, workplace: 'Guardian', link: 'ahunterguardian' },
    { name: 'Chris Bascombe', type: 'journalist', tier: 1, workplace: 'Telegraph', link: '_chrisbascombe' },
    { name: 'David Ornstein', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'David_Ornstein' },
    { name: 'Patrick Boyland', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'Paddy_Boyland' },
    { name: 'Paul Joyce', type: 'journalist', tier: 1, workplace: 'The Times', link: '_pauljoyce' },
    { name: 'Sam Wallace', type: 'journalist', tier: 1, workplace: 'Telegraph', link: 'SamWallaceTel' },
    { name: 'The Bobble', type: 'journalist', tier: 1, workplace: 'X', link: 'ElBobble' },
    // Tier 2
    { name: 'Adam Jones', type: 'journalist', tier: 2, workplace: 'Liverpool Echo', link: 'Adam_Jones94' },
    { name: 'Alan Myers', type: 'journalist', tier: 2, workplace: 'Sky Sports', link: 'AlanMyersMedia' },
    { name: 'Dominic King', type: 'journalist', tier: 2, workplace: 'Daily Mail', link: 'DominicKing_DM' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, workplace: 'X', link: 'FabrizioRomano' },
    { name: 'Joe Thomas', type: 'journalist', tier: 2, workplace: 'Liverpool Echo', link: 'joe_thomas18' },
    { name: 'Shamoon Hafez', type: 'journalist', tier: 2, workplace: 'BBC', link: 'ShamoonHafez' },
    { name: 'Liverpool Echo', type: 'media', tier: 2, link: 'LivEchoEFC' },
    // Tier 3
    { name: 'Duncan Castles', type: 'journalist', tier: 3, workplace: 'Transfers Podcast', link: 'DuncanCastles' },
    { name: 'Lewis Steele', type: 'journalist', tier: 3, workplace: 'Daily Mail', link: 'LewisSteele_' },
    { name: 'Luke Edwards', type: 'journalist', tier: 3, workplace: 'The Telegraph', link: 'LukeEdwardsTele' },
    { name: 'Pete O Rourke', type: 'journalist', tier: 3, workplace: 'Football Insider', link: 'SportsPeteO' },
    { name: 'Sacha Tavolieri', type: 'journalist', tier: 3, workplace: 'X', link: 'sachatavolieri' },
    // Tier 4
    { name: 'The Mirror', type: 'media', tier: 4, link: 'MirrorFootball' },
    // Tier 5
    { name: 'Kaveh Solhekol', type: 'journalist', tier: 5, workplace: 'Sky Sports', link: 'skykaveh' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 5, workplace: 'X', link: 'NicoSchira' },
    { name: 'RossAftbl', type: 'journalist', tier: 5, workplace: 'X', link: 'RossAftbl' },
    { name: 'Toffee Transfers', type: 'journalist', tier: 5, workplace: 'X', link: 'TransfersToffee' },
    { name: 'The Esk', type: 'journalist', tier: 5, workplace: 'X', link: 'theesk' },
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
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : 'aggregator'}" href="https://x.com/${source.link}" target="_blank">
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
        `<div class="tier-notes">News aggregators merely report transfer related stories from elsewhere, but are not the actual source of the story itself. Please make an effort to post/share original sources.</div>`
    )
);

document.querySelector('.last-update a').setAttribute('href', update.thread);
document.querySelector('.last-update a').textContent = `Last update: ${new Date(update.time).toUTCString().slice(0, 16)}`;
