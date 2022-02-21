export const testRoute = {
    path: '/api/test',
    method: 'post',
    handler: async (req, res) => {
     res.send('working')
   }
};

