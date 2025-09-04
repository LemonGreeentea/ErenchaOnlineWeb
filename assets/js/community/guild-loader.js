document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('guild-list-container');
    if (!container) return;

    guildData.forEach(guild => {
        const guildCard = document.createElement('div');
        guildCard.className = 'guild-card';

        guildCard.innerHTML = `
            <div class="guild-card-header">
                <h3 class="guild-name">${guild.name}</h3>
                <p class="guild-master">길드마스터: ${guild.master}</p>
            </div>
            <div class="guild-card-body">
                <p class="guild-orientation">${guild.orientation}</p>
                <p class="guild-description">"${guild.description}"</p>
            </div>
        `;
        container.appendChild(guildCard);
    });
});
