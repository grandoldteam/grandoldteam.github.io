const update = {
    thread: 'https://www.grandoldteam.com',
    time: 1752470400000
}

const sources = [
    // Tier 1
    { name: 'Andy Hunter', type: 'journalist', tier: 1, workplace: 'Guardian', link: 'ahunterguardian' },
    { name: 'David Ornstein', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'David_Ornstein' },
    { name: 'Matt Law', type: 'journalist', tier: 1, workplace: 'The Telegraph', link: 'matt_law_dt' },
    { name: 'Patrick Boyland', type: 'journalist', tier: 1, workplace: 'The Athletic', link: 'Paddy_Boyland' },
    { name: 'Paul Joyce', type: 'journalist', tier: 1, workplace: 'The Times', link: '_pauljoyce' },
    { name: 'The Bobble', type: 'journalist', tier: 1, workplace: 'X', link: 'ElBobble' },
    { name: 'Tofeenut', type: 'member', tier: 1, workplace: 'GrandOldTeam Forum', link: 'tofeenut.52862' },
    { name: 'BBC Merseyside', type: 'media', tier: 1, link: 'bbcmerseysport' },

    // Tier 2
    { name: 'Alan Myers', type: 'journalist', tier: 2, workplace: 'Freelance', link: 'AlanMyersMedia' },
    { name: 'Ben Grounds', type: 'journalist', tier: 2, workplace: 'Sky Sports', link: 'Ben_Islington' },
    { name: 'Chris Bascombe', type: 'journalist', tier: 2, workplace: 'Telegraph', link: '_chrisbascombe' },
    { name: 'Dominic King', type: 'journalist', tier: 2, workplace: 'Daily Mail', link: 'DominicKing_DM' },
    { name: 'Joe Thomas', type: 'journalist', tier: 2, workplace: 'Liverpool Echo', link: 'joe_thomas18' },
    { name: 'Shamoon Hafez', type: 'journalist', tier: 2, workplace: 'BBC', link: 'ShamoonHafez' },
    { name: 'Sam Wallace', type: 'journalist', tier: 2, workplace: 'Telegraph', link: 'SamWallaceTel' },
    // Tier 3
    { name: 'Duncan Castles', type: 'journalist', tier: 3, workplace: 'Transfers Podcast', link: 'DuncanCastles' },
    { name: 'Fabrizio Romano', type: 'journalist', tier: 3, workplace: 'X', link: 'FabrizioRomano' },
    { name: 'Lewis Steele', type: 'journalist', tier: 3, workplace: 'Daily Mail', link: 'LewisSteele_' },
    { name: 'Luke Edwards', type: 'journalist', tier: 3, workplace: 'The Telegraph', link: 'LukeEdwardsTele' },
    { name: 'Pete O Rourke', type: 'journalist', tier: 3, workplace: 'Football Insider', link: 'SportsPeteO' },
    { name: 'Rudy Galetti', type: 'journalist', tier: 3, workplace: 'X / Sport Mediaset', link: 'RudyGaletti' },
    { name: 'Sacha Tavolieri', type: 'journalist', tier: 3, workplace: 'X', link: 'sachatavolieri' },
    // Tier 4
    { name: 'CaughtOffside', type: 'media', tier: 4, link: 'caughtoffside' },
    { name: 'Liverpool Echo', type: 'media', tier: 4, link: 'LivEchoEFC' },
    { name: 'TEAMtalk', type: 'media', tier: 4, link: 'TEAMtalk' },
    { name: 'The Mirror', type: 'media', tier: 4, link: 'MirrorFootball' },
    // Tier 5
    { name: 'Kaveh Solhekol', type: 'journalist', tier: 5, workplace: 'Sky Sports', link: 'skykaveh' },
    { name: 'Nicolò Schira', type: 'journalist', tier: 5, workplace: 'X', link: 'NicoSchira' },
    { name: 'RossAftbl', type: 'journalist', tier: 5, workplace: 'X', link: 'RossAftbl' },
    { name: 'Santi Aouna', type: 'journalist', tier: 5, workplace: 'Foot Mercato', link: 'Santi Aouna' },
    { name: 'Toffee Transfers', type: 'journalist', tier: 5, workplace: 'X', link: 'TransfersToffee' },
    { name: '90min', type: 'media', tier: 5, link: '90min_Football' },
    { name: 'Football Insider', type: 'media', tier: 5, link: 'footyinsider247' },
    { name: 'Goodison News', type: 'media', tier: 5, link: 'GoodisonNews' },
    // Aggregators
    { name: 'EFC DAILY', tier: 'aggregator', link: 'EFCDaily_' },
    { name: 'Everton Extra', tier: 'aggregator', link: 'Everton_Extra' },
    { name: 'EvertonNewsFeed', tier: 'aggregator', link: 'EvertonNewsFeed' },
];

sources.forEach(source => {
    const href = source.type === 'member' ? `https://www.grandoldteam.com/forum/members/` : `https://x.com/${source.link}`;
    document.querySelector(`.tier-${source.tier} .tier-content`).appendChild(
        document.createRange().createContextualFragment(
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : source.type === 'member' ? 'member' : 'aggregator'}" href="${href}" target="_blank">
            ${source.type !== 'journalist' ? source.name : `${source.name} <span class="workplace">(${source.workplace})</span>`}
            </a>`
        )
    );
});

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
