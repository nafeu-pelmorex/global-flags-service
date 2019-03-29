$(document).ready(function(){

  const graph = graphql("/graphql");

  const api = {
    getFlags: (search = '') => {
      return graph(`query { flags(search: "${search}") { key, label, changes } }`)();
    }
  }

  const flagArea = $('#flag-area');
  const flagSearch = $('#flag-search');

  function fetchFlags(search) {
    flagArea.empty();
    api.getFlags(search).then((data) => {
      data.flags.forEach((flag) => {
        const flagElement = $('<div>', {class: 'flag-element mb-10px'});
        const flagKey = $('<div>', {class: 'flag-key p-5px mb-10px'}).text(flag.key);
        const flagLabel = $('<div>', {class: 'flag-label mb-10px pl-25px'}).text(flag.label);

        flagElement
          .append(flagKey)
          .append(flagLabel);

        flagArea.append(flagElement);
      })
    });
  }

  flagSearch.bind('input keyup', () => {
    const $this = $(this);
    const delay = 500;

    clearTimeout($this.data('timer'));
    $this.data('timer', setTimeout(() => {
      $this.removeData('timer');
      fetchFlags(flagSearch.val());
    }, delay));
  });

  fetchFlags();

});