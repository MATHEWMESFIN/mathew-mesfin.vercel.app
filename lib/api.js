export const sendEmail = async (data) => fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
    }
})