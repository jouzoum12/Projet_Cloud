 # Starting Image
 # Stage Compilation
 FROM alpine:3.15 as builder

 # chemin de travail
 WORKDIR /Projet_Cloud-main

 # installation des paquets système
 RUN apk add --update nodejs npm && apk add --update npm

 # copie des fichiers du dépôt
 COPY . .

 # downgrade des privilèges
 #USER muhamadjouzou

 # installation des dépendances avec npm
 RUN npm install

 # build avec npm
 RUN npm run build

 # ajout utilisateur node et groupe node
 # RUN . .
 # downgrade des privilèges
 # USER muhamadjouzou

 # execution stage
 FROM alpine:3.15 as runner

 RUN apk --no-cache add ca-certificates
 
 # copy th output to the builder 
 COPY --from=builder /Projet_Cloud-main/dist /app
 
 # exécution
 CMD ["node","/Projet_Cloud-main/dist/index.js"]