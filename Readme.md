### DevOps-Interview-Questions

Google
1. Small Website and it is scalling - what are things need to performed
2. Vertical & Horizontal Scalling


Workflow CI/CD
1. Have a repo in Github which contains a nodeJS project, I wanted to make a complete workflow to get it deployed in an ECS
2. Explain 3 Tier Architecture

Linux
1. Partition in Linux
2. Disk Utilization of particular User
3. Linux command Hangs - what is the next step 
4. Kill signals
5. Memory Usage
6. Symbolic Link. Soft & Hard
7. What is `$#` and `$?`
8. SSH without password
9. Debug a shell script -x
10. sed & awk
11. Run shell-script in background
12. How to check if a port is connectable or not
13. IP address in a file and need to find the number of times an IP repeats
14. Shell script can accept 4 parameters , A B C D. need to get the position of C and print the position number
15. How can we schedule a script to run everyday

Networking
1. How many hosts in a /24 network? What about a /22 ?
2. What is IPv6 ? Why should we care?
3. What if I change from http://www.google.com to https://www.google.com ?

Git
1. git pull and git fetch
2. clone specific branch
3. revert a wrong commit

Ansible
1. Playbook has 5 Task, Run first 3 Task in Node1 and the rest 2 in Node2
2. What is ansible.cfg
3. Detailed Logs on playbook execution --v
4. YAML reusable - best ways - Roles
5. Ansible vault ? 
6. Playbook to run as root user, how ?
7. Diff between copy module and fetch module
8. What is dynamic inventory? 
9. Muti node - ubuntu and centos - how can I install a package using same playbook

Jenkins
1. Multi Branch Pipelines
2. Plugins, downgrade a particular plugin
3. Jenkinsfile - what are stages
4. Trigger jenkinsJob - poll scm, build perid and webhooks
5. How can we backup the Jenkins

Docker
1. Best Practices in Docker
2. STOP & KILL
3. Multiple CMD in DockerFile
4. Docker Networks
5. ADD and COPY
6. I have updated the files inside the container - how to check which file I have changed (docker inspect)
7. why we need .dockerignore

Terraform
1. State Files - Remote and Local
2. How to connect with Cloud providers
3. Apply terraform - same time another dev created the same resorce
4. Modules

AWS
1. EC2 upgrade - Need DownTime ?
2. Roles and Policies - Group - Programatic Access
3. How to clone an EC2 instance
4. AMI is region specific right, can I create in another region ? -how (copy)
5. Why we need SecurityGroups ? what are ENI's - default outbound rules
6. VPC's - what is public and private subnets
7. LoadBalancer - ALB vs NLB
8. AutoScaling - created and autoscl rule - load goes more than 60% - create a new instance - Currently i have 3 machine - 1st-62% , 2nd-30% and 3rd-30% - Will autoscl create new machine ?

Kubernetes
1. What all objects u know in kubernetes
2. What are Pods
3. list pods commands & deploy command
4. StatefulSets ?
5. For production - deployment statergy with no-down time - Rolling Update(default) 
6. Command to find which container had failed in pod and command to get logs of container
7. Tool to maintain log files 
