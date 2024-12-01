l1, l2 = [], []
with open('1a-input', 'r') as file:
    for line in file:
        left, right = map(int, line.split())
        l1.append(left)
        l2.append(right)
l1.sort()
l2.sort()
dist = 0
for i in range (len(l1)):
    dist += abs(l1[i] - l2[i])
print(dist)

sim_score = 0
for j in l1:
    sim_score+= j * l2.count(j)
print(sim_score)

