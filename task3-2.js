if (req.url === '/') {
    res.statusCode = 200;
    res.end('OK');
  } else if (req.url === '/not-found') {
    res.statusCode = 404;
    res.end('Not Found');
  } else if (req.url === '/server-error') {
    res.statusCode = 500;
    res.end('Internal Server Error');
  } else {
    res.statusCode = 400;
    res.end('Bad Request');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

