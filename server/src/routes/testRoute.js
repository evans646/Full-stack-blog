import { sendEmail } from '../utils/sendEmail';


export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'jw207740+test5@gmail.com',
                from: 'jw207740@gmail.com',
                subject: 'Testing with sendGrid',
                text: 'Hello there i am testing my email address from a node server from send grid, if you see this then it works', //you can add the html and that will display the email as html content 
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            });
            //if successful 
            res.sendStatus(200);
            
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
        
    }
};