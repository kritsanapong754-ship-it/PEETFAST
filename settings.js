const settings={

language:"th",

theme:"dark",

font:"default"

};

export function saveSettings(){

localStorage.setItem(
"settings",
JSON.stringify(settings)
);

}

export function loadSettings(){

const data =
localStorage.getItem(
"settings"
);

if(!data) return;

const parsed =
JSON.parse(data);

Object.assign(
settings,
parsed
);

}

loadSettings();
