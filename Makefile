build:
	docker build -f Dockerfile-multistage -t proyecto/react:latest .

run:
	docker run -p 8080:80 proyecto/react:latest