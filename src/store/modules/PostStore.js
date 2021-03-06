export const PostStore = {
  state: {
    allPosts: [
      {
        id: 1,
        title: 'Beautiful lotion',
        image:
          'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904245706579_2_1.jpg',
        body:
          'A luxurious, yet lightweight lotion that slips on easily, absorbs quickly. Leaves skin feeling moisturized, smooth and silky'
      },
      {
        id: 2,
        title: 'Cream for dry skin',
        image:
          'https://www.akeso.ca/wp-content/uploads/2019/01/Product_1-550x500.jpg',
        body:
          'This facial cream is a powful hydrating product from Pretty Cowry. The ingredients include several natrural materials which are able to moisture facial skin and help it to heal up dark spots and other marks on the skin.'
      },
      {
        id: 3,
        title: 'Suncream - 2020',
        image:
          'https://cdn.shopify.com/s/files/1/0249/1218/products/Suntique_I_M_PURE_CICA_SUNCREAM_PDP_1_grande.jpg?v=1571438600',
        body:
          'The best way to remember it is that A is for ageing (the UV rays that permanently damage your skin cells) and B is for burning (the radiation that causes sunburn and sun damage). So SPF (sun protection factor)  works to protect against both.'
      }
    ],
    nextId: 4,
    searchTerm: ''
  },
  mutations: {
    setPost (state, post) {
      state.allPosts.push({ id: state.nextId, ...post })
      state.nextId++
    },
    deleteExistingPost (state, post) {
      let postIndex = state.allPosts.indexOf(post)
      state.allPosts.splice(postIndex, 1)
    },
    setSearchTerm (state, { term }) {
      state.searchTerm = term
    }
  },
  actions: {
    addPost (context, post) {
      context.commit('setPost', post)
    },
    deletePost (context, post) {
      context.commit('deleteExistingPost', post)
    }
  },
  getters: {
    getPosts (state) {
      return state.allPosts
    },
    filteredPosts (state) {
      let filterTitle = state.allPosts.filter(post =>
        post.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )

      let filterBody = state.allPosts.filter(post =>
        post.body.toLowerCase().includes(state.searchTerm.toLowerCase())
      )

      let filtered = [...new Set([...filterTitle, ...filterBody])]

      return filtered
    }
  }
}
