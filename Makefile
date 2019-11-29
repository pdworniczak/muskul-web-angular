build-container:
	docker run --name=muskul -i -t -d -v ${CURDIR}:/home/muskul -w="/home/muskul" -p 4200:4200 node:12
run-container:
	docker start muskul
bash:
	docker exec -it muskul /bin/bash