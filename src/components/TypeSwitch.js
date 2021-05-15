export default function TypeSwitch() {
  const typeInputComponents = ['general', 'programming']
    .map(
      type =>
        `<label>
            <input
            id='${type}'
            type='radio'
            name='jokes-type'
            onchange='(${changeJokesType})(this.id);'
            ${dataStore.jokesType === type ? 'checked' : ''}>
            ${type}
          </label>
        `,
    )
    .join('');

  return `
    <p>Choose jokes category:</p>
    ${typeInputComponents}
  `;
}
