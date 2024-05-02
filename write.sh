# Print every number from 1 to 100
for dir in "core" "dev"; do
rm -rf packages/$dir/src
for i in {1..20}; do
  mkdir -p packages/$dir/src
  echo "export const a$i = $i;" > packages/$dir/src/$dir-$i.ts
done
done 
