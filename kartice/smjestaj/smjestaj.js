function toggleMap(mapId) {
    const map = document.getElementById(mapId);
    if (map.style.display === 'block') {
        map.style.display = 'none';
    } else {
        map.style.display = 'block';
    }
}