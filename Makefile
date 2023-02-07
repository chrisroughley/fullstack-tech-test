.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

default: help

npm-installs: ## Install npm packages in all  directories
	@{ \
		npm install ;\
		pushd ./client ;\
		npm install ;\
		popd ;\
		pushd ./server ;\
		npm install ;\
		popd ;\
	}

npm-installs-and-run-all: ## Install npm packages in all  directories and run api and react app concurrently 
	@{ \
		npm install ;\
		pushd ./client ;\
		npm install ;\
		popd ;\
		pushd ./server ;\
		npm install ;\
		npm start ;\
	}

run-all: ## Run api and react app concurrently 
	@{ \
		pushd ./server ;\
		npm start ;\
	}
