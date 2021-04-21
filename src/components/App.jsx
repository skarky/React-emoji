import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(e) {
  return (
    <Entry
      id={e.id}
      key={e.id}
      emoji={e.emoji}
      naslov={e.name}
      opis={e.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
