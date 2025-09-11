<script>
    // Data uit +page.server.js
    let { data } = $props();
    const members = data.members;
  
    function assetUrl(member) {
      if (member?.avatar?.id) {
        return `https://fdnd.directus.app/assets/${member.avatar.id}?fit=cover&width=600&height=800`;
      }
      return "/default-avatar.jpg";
    }
  
    import squadpageSvg from '$lib/assets/squadpage.svg';
    import menuSvg from '$lib/assets/menu.svg'; // menu icon
  </script>
